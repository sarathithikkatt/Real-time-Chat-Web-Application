const express = require("express");

const accountRouter = express.Router();

const Accountdata = require("../models/Accountdata");


// designs
accountRouter.get("/",(req,res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    Accountdata.find()
    .then(function(accounts)
    {
        res.send(accounts);
    });
});


// add new account
accountRouter.post("/addaccount",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    console.log(req.body);

    new account
    // var accnt = {
    //     firstname : req.body.firstname,
    //     surname : req.body.surname,
    //     email : req.body.email,
    //     username : req.body.username,
    //     password : req.body.password,
    //     phone : req.body.phone,
    //     gender : req.body.gender,
    //     dob : req.body.dob,  
    // }
    var accnt = {
        firstname : req.body.data.firstname,
        surname : req.body.data.surname,
        email : req.body.data.email,
        username : req.body.data.username,
        password : req.body.data.password,
        phone : req.body.data.phone,
        gender : req.body.data.gender,
        dob : req.body.data.dob,  
    }

    // pass to AccountSchema
    var account = Accountdata(accnt);
    account.save()
    .then(()=>console.log("Account data is passed to AccountSchema"))
    .catch((error)=>console.log(error))
    res.send("Account data passed to AccountSchema");
});

// search account
accountRouter.get("/searchaccount/:email",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const email = req.params.email;

    Accountdata.findOne({email : email})
    .then(function(account){
        res.send(account);
        console.log(account);
    });

});


module.exports = accountRouter;