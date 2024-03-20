const express = require('express')
const {getUsers} = require('../controllers/user.controller')
const protected = require('../utils/protectedroute')
const router = express.Router()

router.get('/' ,protected,getUsers)

module.exports = router;