const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
const PW = process.env.PASSWORD;
const UR = process.env.USER;
const HT = process.env.HOST;
const pool = mysql.createPool({
  host: HT,
  user: UR,
  password: PW,
  database: DB,
  waitForConnections:true,
  connectionLimit:5,
  queueLimit:0
}).promise()

pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

module.exports = pool;
