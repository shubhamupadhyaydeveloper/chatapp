const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default : []
        }
    ],
    lastMessage :  {
        text : String,
        senderId :  {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    }
},{timestamps : true})

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat;