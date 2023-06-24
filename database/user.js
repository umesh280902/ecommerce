/**
 * This is a Node.js router that handles user registration, login, and retrieval of user details from a
 * MySQL database.
 * @returns The `router` and `checkuser` functions are being exported.
 */
const dotenv=require('dotenv')
const express=require('express')
const router=express.Router()
const pool=require('./database')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const secretkey=process.env.SECRET_KEY
router.use(express.urlencoded({extended:true}))
router.use(express.json())
async function checkuser(){
    const [details]=await pool.query("SELECT * FROM user")
    return details
}

async function generateUser(emailaddress, password, firstname, lastname, gender) {
  const result = await pool.query(
    `INSERT INTO user (emailaddress, password, firstname, lastname, gender)
            VALUES(?,?,?,?,?)`,
    [emailaddress, password, firstname, lastname, gender]
  );
  console.log(result)

  const { insertId } = result[0]; // Assuming the inserted user's id is returned by the database

  const token = await generateCookie(insertId);

  return token;
}


async function singleUser(emailaddress,password){
   const [details]=await pool.query("SELECT * FROM user WHERE emailaddress=?",[emailaddress])
        if(details.length===0){
          return null
        }
        const storedPassword=details[0].password
        const isValidPassword=await bcrypt.compare(password,storedPassword)
        if(isValidPassword){
          return details[0]
        }
        return null
}
async function generateCookie(id) {
  const token = await jwt.sign({ id },secretkey );
  console.log(token);
  return token;
}


router.get("/user", async (req,res)=>{
    const details =await checkuser()
    res.json(details)
})


router.post("/user", async (req, res) => {
    try {
      const details = req.body;
      const { emailaddress, password, firstname, lastname, gender } = details;
      if (emailaddress === "" || password === "" || firstname === "" || lastname === "" || gender === "") {
        res.send("Please fill all the details correctly");
      } else {
        const answers = await singleUser(emailaddress, password);
        if (answers) {
          res.send("Email already exists");
        } else {
          const passwordHash = await new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
              if (err) reject(err);
              resolve(hash);
            });
          });
          console.log(passwordHash)
          const token=await generateUser(emailaddress, passwordHash, firstname, lastname, gender);
          res.cookie("jwt",token,{
            expires:new Date(Date.now()+300000),
            httpOnly:true,
          })
          res.redirect("/");
        }
      }
    } catch (error) {
      res.send("An error occurred while processing your request please check your password or email");
    }
});
  

router.post("/login", async (req, res) => {
 
    try {
     
      const answers = req.body;
      // use destructuring to get email and password from answers object
      const { emailaddress, password } = answers;
      if (emailaddress === "" || password === "") {
        res.send("Please fill up both email and password");
      } else {
        // call the singleUser function with email and password as arguments
        const details = await singleUser(emailaddress, password);
        if (details) {
          // if details are found for the email and password, redirect to home page
          const token=await generateCookie(details.id)
          res.cookie("jwt",token,{
            expires:new Date(Date.now()+300000),
            httpOnly:true,
          })
          res.redirect("/");
        } else {
          // if details are not found, show error message
          res.send("Invalid username or password");
        }
      }
    }
    catch (error) {

      // if there is an error, show error message
      res.send("An error occurred while processing your request");
  }
});


module.exports=router