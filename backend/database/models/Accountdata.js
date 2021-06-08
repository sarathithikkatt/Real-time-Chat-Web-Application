const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://main_user:2nynzDdS4syKjrAj@rcacluster.vfyo3.mongodb.net/test', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Accountdata Schema is ONLINE"))
.catch((error)=>console.log("Error in Accountdata.js"+error))

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    firstname : String,
    surname : String,
    email : String,
    username : { type:String, lowercase:true, unique:true},
    password : String,
    phone : Number,
    gender : String,
    dob : Date,
    friends : Array,
    status : Boolean,    
})

var Accountdata = mongoose.model('Accounts',AccountSchema);

module.exports = Accountdata;

const db = mongoose.connection;
db.once('error',(err)=>{
    console.log("Error at Accountdata"+err);
});
db.on('open',()=>{
    console.log("Accountdata DB is connected");
})