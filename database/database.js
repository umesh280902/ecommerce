const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DATABASE = process.env.DATABASE;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;
const HOST = process.env.HOST;

const pool = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  waitForConnections:true,
  connectionLimit:5,
  queueLimit:0
}).promise();

pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

module.exports = pool;
