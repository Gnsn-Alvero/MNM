const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    
    name: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        require:true,
    },
    message: {
        type: String,
        require:true,
    }
}) 
module.exports=mongoose.model("contectus",schema)