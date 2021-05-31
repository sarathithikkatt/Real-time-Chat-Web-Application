const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://main_user:2nynzDdS4syKjrAj@rcacluster.vfyo3.mongodb.net/test', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Userdata Schema is ONLINE"))
.catch((error)=>console.log("Error in Userdata.js"+error))

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id : { type:String, lowercase:true, unique:true},
    firstname : String,
    surname : String,
    email : String,
    username : { type:String, lowercase:true, unique:true},
    password : String,
    phoneno : Number,
    Sex : String,
    DOB : Date,
    friends : Array,
    status : Boolean,    
})

var Usersdata = mongoose.model('Users',UserSchema);

module.exports = Usersdata;

const db = mongoose.connection;
db.once('error',(err)=>{
    console.log("Error at Userdata"+err);
});
db.on('open',()=>{
    console.log("Userdata DB is connected");
})