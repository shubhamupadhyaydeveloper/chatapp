require('dotenv').config()
const cookieparser = require('cookie-parser')
const authRouter = require('./routes/auth.routes')
const messageRouter = require('./routes/message.routes')
const userRouter = require('./routes/user.routes')
const express = require('express')
const mongodb = require('./utils/connectdb')
const  {app,server} = require('../server/socket/socket')
const port = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use(cookieparser())


// routes
app.use('/api/auth' , authRouter)
app.use('/api/user', userRouter)
app.use('/api/message', messageRouter)


app.get('/', (req ,res) => {
    res.send("Hi welcome to chat app")
})

server.listen(port, () => {
    mongodb()
    console.log("App is listing on port")
})