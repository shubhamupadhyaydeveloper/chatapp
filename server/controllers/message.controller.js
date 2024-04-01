const Conversation = require("../models/conversation.model")
const Message = require('../models/message.model')
const {io,getSocketId}  = require('../socket/socket')

const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id
        const receiverId = req.params.id
        const { text } = req.body;
        let chat = await Conversation.findOne({
            $or: [
                { participants: [senderId, receiverId] },
                { participants: [receiverId, senderId] }
            ]
        })
        if (!chat) {
            chat = await Conversation.create({
                participants: [senderId, receiverId],
                lastMessage: {
                    text,
                    senderId
                }
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text
        })

        if (newMessage) {
            chat.lastMessage = {
                text,
                senderId
            };
            chat.messages.push(newMessage._id)
        }

        await Promise.all([
            newMessage.save(),
            chat.save()
        ])

        // socket io funtionality
        const receiverSocketId = getSocketId(receiverId)
        if(receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage',newMessage)
            console.log(`Message emitted to ${receiverSocketId}`);
        }

        res.status(200).json(newMessage)

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
            $or: [
                { participants: [senderId, receiverId] },
                { participants: [receiverId, senderId] }
            ]
        }).populate('messages')
        if (!chat) return res.status(200).json([]);

        res.status(200).json(chat.messages)
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in getMessage', error)
    }
}

module.exports = { sendMessage, getMessage }