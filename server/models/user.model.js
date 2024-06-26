const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
        unique : true
    } ,
    profilename : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    profilePic : {
        type : String,
        default  : ""
    },
    gender : {
        type : String,
        required : true,
        enum : ["male","female"]
    }
},{timestamps : true})

const User = mongoose.model("User",schema)

module.exports = User;