/**
 * This is a module that exports a router with two GET routes for rendering payment pages, one with
 * cart details and one without, and helper functions for checking user details and retrieving cart
 * details from a database.
 * @param emailaddress - The email address of a user.
 * @returns The code exports a router object that handles two GET requests. The first GET request is
 * for the route '/user/:emailaddress/payment' and it renders a payment page with user details and cart
 * details if the user exists, otherwise it redirects to the '/user' route. The second GET request is
 * for the route '/payment' and it renders a payment page without any user or cart details.
 */
const dotenv=require('dotenv')
const express=require('express')
const router=express.Router()
const pool=require('./database')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const secretkey=process.env.SECRET_KEY
router.use(cookieParser())
router.use(express.urlencoded({extended:true}))
router.use(express.json())
async function checkuser(id){
    const [details]=await pool.query("SELECT * FROM user where id=? ",[id])
    return details
}
async function cart(id){
    const [details]=await pool.query("SELECT * FROM addtocart where customer_id=? ",[id])
    return details
}

async function authenticate(req,res,next){
    const token=req.cookies.jwt
    if(!token){
      return res.status(401).json({message:"missing authentication token"})
    }
    try{
      const decoded=jwt.verify(token,secretkey)
      req.customer_id=decoded.id
      next()
    }catch(error){
      res.status(401).json({message:"invalid authentication"})
    }
  }
  

router.get('/payment',authenticate,async (req,res)=>{
    const id=req.customer_id
    console.log(id)
    const details=await checkuser(id)
    console.log(details)
    const cartDetails=await cart(id)
    res.render("payment.ejs",{
    details,cartDetails
    })
})

module.exports=router;