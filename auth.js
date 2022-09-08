//admin page
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}))

require('../db/conn');
const User =require("../model/user");
var name,phone,address,agentid;

router.get("/",(req,res) =>{
    res.sendFile(__dirname+"/index.html");

});


router.post('/agent',(req,res)=>{
    const name = req.body.cname;
    const phone = req.body.cid;
    const address = req.body.cadd;
    const agentid = req.body.db;

    const value = new User(name,phone,address,agentid);
    value.save().then(()=>{
    res.status(201).json({message: "success"});
    }).catch((err) =>res.status(500).json({error: "Failed gg"}));
    res.send("Data have been send to the agent");
    
});

router.get("/agents",(req,res) =>{
    res.sendFile(__dirname+"/index.html");

});

module.exports = router;