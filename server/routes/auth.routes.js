const express = require('express')
const router  = express.Router()
const {signUp , loginUser,logoutUser} = require("../controllers/auth.controller")

router.post("/signup", signUp)
router.post('/login', loginUser)
router.post('/logout',logoutUser)

module.exports = router;