const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())

const mongoose = require('./database/mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const accountRouter = require("./database/routes/accountRouter");

app.use("/account",accountRouter);


app.get("/",(req,res)=>
{
    res.send("hai");
});

app.listen(5000,()=>console.log("Server Online"));