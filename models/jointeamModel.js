const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    
    fname: {
        type: String,
        require:true,
    },
    lname: {
        type: String,
        require:true,
    },
    city: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require: true,
    },
    cemail: {
        type: String,
        require: true,
    },
    mnmbefore: {
        type: String,
        require:true,
    },
    date: {
        type: String,
        require:true,
    },
    mobile: {
        type: String,
        require:true,
    },
    expreience: {
        type: String,
        require:true,
    },
    address: {
        type: String,
        require:true,
    },
    time: {
        type: String,
        require:true,
    },
    comments: {
        type: String,
        require:true,
    }
    
})
module.exports=mongoose.model("jointeam",schema)