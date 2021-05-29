const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://main_user:2nynzDdS4syKjrAj@rcacluster.vfyo3.mongodb.net/test', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("Mongodb database is ONLINE"))
    .catch((error)=>console.log(error))

module.exports = mongoose;