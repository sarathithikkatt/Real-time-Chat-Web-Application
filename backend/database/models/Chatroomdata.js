const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://main_user:2nynzDdS4syKjrAj@rcacluster.vfyo3.mongodb.net/test', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Chatroomdata Schema is ONLINE"))
.catch((error)=>console.log("Error in Chatroomdata.js"+error))

const Schema = mongoose.Schema;

const ChatroomdataSchema = new Schema({
    id : String,
    members : Array,
    messages : Array,
    blocked : Boolean,
    mute: Boolean,
})

var Roomdata = mongoose.model('Users',ChatroomdataSchema);

module.exports = Roomdata;

const db = mongoose.connection;
db.once('error',(err)=>{
    console.log("Error at Chatroomdata"+err);
});
db.on('open',()=>{
    console.log("Chatroomdata DB is connected");
})