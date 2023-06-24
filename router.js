/* This is a Node.js application using the Express framework. It sets up a server listening on port
3000 and defines routes for different URLs using the `app.get()` method. It also uses middleware
functions for handling requests related to foot, top, bottom, user, addtocart, and payment. The
`express.static()` method is used to serve static files from the `client` directory. The `view
engine` is set to EJS for rendering dynamic views. */
const dotenve=require('dotenv')
const express = require("express");
const app = express();
const port = process.env.PORT||3000
const top = require("./database/top");
const bottom = require("./database/bottom");
const user = require("./database/user");
const pool = require("./database/database");
const checkuser = require("./database/user");
const addotcart = require("./database/addtocart");
const payment = require("./database/payment");
const cookieParser=require('cookie-parser')
app.use(cookieParser())
app.use(express.static("client"));
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log("the server is running at http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.render("welcome.ejs");
});

app.get("/welcome", (req, res) => {
  res.render("welcome.ejs");
});

app.get("/user", (req, res) => {
  res.render("signup.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.use(top);
app.use(bottom);
app.use(user);
app.use(addotcart);
app.use(payment);
app.get('*',(req,res)=>{
  res.send('page not found')
})
