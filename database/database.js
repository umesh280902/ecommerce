/* This code is creating a connection pool to a MySQL database using the `mysql2` library in Node.js. */
const mysql=require('mysql2')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE
const PW=process.env.PASSWORD
const UR=process.env.USER
const HT=process.env.HOST
const pool=mysql.createPool({
  host:HT,
  user:UR,
  password:PW,
  database:DB,
}).promise()

module.exports=pool