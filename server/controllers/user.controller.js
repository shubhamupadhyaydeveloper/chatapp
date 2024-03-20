const User = require('../models/user.model')
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

module.exports = {getUsers}