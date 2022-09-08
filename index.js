const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

dotenv.config({path: "./config.env"});
const PORT = process.env.PORT;
 
require("./db/conn");
// const User = require("./model/user");

app.use(require("./router/auth"));


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
})

app.listen(PORT,function(){
    console.log("Server started at port 3000");
})

app.get("/agent",function(req,res){
    res.sendFile(__dirname+"/agents.html");
})

app.get("/login",function(req,res){
    res.sendFile(__dirname+"/login.html");
})

app.get("/customer",function(req,res){
    res.sendFile(__dirname+"/customer.html");
})

// app.post("/",function(req,res){
//     const apikey = "AIzaSyAfcliqXbBPiGfspvWMABY5-U0VwyC9agE";
// })



