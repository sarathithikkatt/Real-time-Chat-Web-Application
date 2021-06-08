const express = require("express");

const accountRouter = express.Router();

const Accountdata = require("../models/Accountdata");


// home
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

    // new accounts
    
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
accountRouter.get("/searchaccount/:email_or_username",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const email_or_username = req.params.email_or_username;
    console.log('ivde ethi')
    Accountdata.findOne(
        {
            $or: [
                {username : email_or_username},
                {email : email_or_username}
            ]            
        }
        )
    .then(function(data){
        res.send(data);
        console.log(email_or_username)
        console.log("login reached backend")
        console.log(data);
    });

});


module.exports = accountRouter;