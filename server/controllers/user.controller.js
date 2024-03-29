const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const getUsers = async (req,res) => {
    try {
      const currentUser = req.user._id
      const allUsers = await User.find({_id : {$ne : currentUser}}).select("-password")
      res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error("Error in getUser", error.message);
    }
}

const updateUserProfile = async (req,res)  => {
  try {
    const {profilename,profilePic,password} = req.body;
    const userId = req.user._id;
    if(password) {
      // const hashedPassword = await 
    }
    const currentUser = await User.findByIdAndUpdate(userId , {
       profilename , profilePic,password
    })
  } catch (error) {
    console.log('Error in upadateUserProfile',error.message)
  }
}



module.exports = {getUsers}