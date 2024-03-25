const Conversation = require("../models/conversation.model")
const Message = require('../models/message.model')

const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id
        const receiverId = req.params.id
        const { text } = req.body;
        let chat = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!chat) {
            chat = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text
        })

        if (newMessage) {
            chat.messages.push(newMessage._id)
        }

        await Promise.all([chat.save(),newMessage.save()])

        // socket io funtionality
        
        res.status(201).json(newMessage)

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in sendMessage', error)
    }
}

const getMessage = async (req, res) => {
    try {
        const senderId = req.user._id;
        const receiverId = req.params.id;
        const chat = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate('messages')
        if (!chat) return res.status(200).json([]);
        
        res.status(200).json(chat.messages)
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in getMessage', error)
    }
}

module.exports = { sendMessage, getMessage }