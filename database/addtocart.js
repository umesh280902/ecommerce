/**
 * This is a Node.js module that defines routes for adding and deleting items from a shopping cart and
 * retrieving the contents of the cart from a MySQL database.
 * @param id - The ID of the item being added to the cart.
 * @param size - The size parameter is used to specify the size of the item being added to the cart. It
 * is used in the SQL queries to check if the item already exists in the cart and to insert or update
 * the item in the cart.
 * @param type - The type parameter is a string that represents the type of the item being added to the
 * cart. It is used in the SQL queries to identify the item in the cart.
 * @returns The code exports a router object that handles HTTP requests related to adding items to a
 * shopping cart, deleting items from the cart, and displaying the contents of the cart. The router
 * uses a MySQL database to store the cart items. The `getcart` function is an asynchronous function
 * that queries the database to check if an item with a given id, size, and type already exists in the
 * cart. The
 */
const dotenv=require('dotenv')
const express=require('express')
const router=express.Router()
const pool=require('./database')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const secretkey=process.env.SECRET_KEY
router.use(express.urlencoded({extended:true}))
router.use(express.json())
router.use(cookieParser())

async function getcart(customer_id,id,size,type){
    const [answers]=await pool.query("SELECT * FROM addtocart where id=? and size=? and type=? and customer_id=?",[id,size,type,customer_id])
    return answers[0]
}

async function authenticate(req,res,next){
  const token=req.cookies.jwt
  if(!token){
    return res.status(401).json({message:"please login again"})
  }
  try{
    const decoded=jwt.verify(token,secretkey)
    req.customer_id=decoded.id
    next()
  }catch(error){
    res.status(401).json({message:"invalid authentication"})
  }
}

router.post("/addtocart", authenticate,async (req, res) => {
    //res.send("yaaay ho gaya")
  const customerid=req.customer_id
  const details = req.body
    const { id, brandname, subbrand, size, price, originalprice,type } = details
    console.log(details)
  
    try {
      let cartItem = await getcart(customerid,id, size,type)
      let quantity = 1
  
      if (cartItem) {
        // Item already exists in the cart, so update its quantity
        quantity = cartItem.quantity + 1
        const result = await pool.query(
          "UPDATE addtocart SET quantity = ? WHERE id = ? AND size = ? and type=? and customer_id=?",
          [quantity, id, size, type,customerid]
        );
      } else {
        // Item does not exist in the cart, so add it
        const priceValue=price.substring(3)
        console.log(priceValue)
        const originalValue=originalprice.substring(3)
        console.log(originalValue)
        const result = await pool.query(`INSERT INTO addtocart(id, title, subtitle, size, price, originalprice, quantity,type,customer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ? )`, [id, brandname, subbrand, size, priceValue, originalValue, quantity,type,customerid])
        console.log(result)
      }
  
      res.status(200).json({ message: "Item added to cart successfully!" });
    } catch (error) {
      console.log(error)
      res.status(500).send("An error occurred while adding item to cart.")
    }
  })

  router.delete("/addtocart", authenticate,async (req, res) => {
    //res.send('yaaay ho gaya')
    const details = req.body;
    const { addtocartid } = details;
    console.log(details);
  
    try {
      const result = await pool.query("DELETE FROM addtocart WHERE addtocartid = ?", addtocartid);
      console.log(result);
  
      res.status(200).json({ message: "Item deleted from cart successfully!" });
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred while deleting item from cart.");
    }
  });
  
  

router.get("/addtocart", authenticate,async (req,res)=>{
  // res.send('yaaay ho gaya')
  const customerid=req.customer_id
    const [atc]=await pool.query("SELECT * FROM addtocart where customer_id=?",[customerid])
    console.log(atc)
    res.render("addtocart.ejs",{
        atc
    })
})


module.exports=router