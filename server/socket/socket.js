const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const app = express()

const server =  http.createServer(app)

const io = new Server(server , {
    cors : {
      origin : ['http://localhost:3000'],
      methods  : ['GET','POST']
    }
})

function getSocketId(receiverId)   {
    return onlineUser[receiverId];
}

const onlineUser = {}

io.on('connection' , (socket) => {
    console.log('user is connected',socket.id)
    
    const userId = socket.handshake.query.userId;
    
    if(userId != 'undefined') onlineUser[userId] = socket.id

    io.emit('onlineUsers' , Object.keys(onlineUser))

    socket.on('disconnect', () => {
        console.log('user is disconnected',socket.id)
        delete onlineUser[userId]
        io.emit('onlineUsers' , Object.keys(onlineUser))
    })
})

module.exports = {app,server,io,getSocketId}