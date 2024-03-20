const express = require('express')
const {sendMessage,getMessage} = require("../controllers/message.controller")
const protected = require('../utils/protectedroute')
const router = express.Router()

router.get('/:id',protected,getMessage)
router.post("/send/:id",protected,sendMessage)

module.exports = router;