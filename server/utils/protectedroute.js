
const  User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const protectedRoute = async (req,res,next) => {
  try {
    const token = req.cookies.jwt
    if(!token) {
        return res.status(401).json({message : "Unauthorized User"})
    }
    const decoded = jwt.verify(token,process.env.JOSN_TOKEN)
    const currentUser = await User.findById(decoded.userId).select("-password")

    req.user = currentUser;
    next()
    
  } catch (error) {
    res.send(500).json({error : error.message})
    console.log('Error in protected route',error)
  }
}

module.exports = protectedRoute;
