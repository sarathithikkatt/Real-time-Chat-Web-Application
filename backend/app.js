const express = require('express');
const app = express();
const cors = require('cors')

const mongoose = require('./database/mongoose');

// app.use((req, res, next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");  
//     res.setHeader(
//         "Access-Control-Allow-Methods",  
//         "GET, POST, PATCH, DELETE, OPTIONS");  
//     res.setHeader(  
//         "Access-Control-Allow-Headers",  
//         "Origin, X-Requested-With, Content-Type, Accept");  
//     next();
// });

app.use(cors())

app.use(express.json());

app.listen(5000,()=>console.log("Server Online"));