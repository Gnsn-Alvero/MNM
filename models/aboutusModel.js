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
    comment: {
        type: String,
        require:true,
    }
})
module.exports=mongoose.model("AboutUsComment",schema)