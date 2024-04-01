const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const signUpSchema = require('../utils/validation');
const { generateToken } = require('../utils/token');

const signUp = async (req, res) => {
    try {
        const { fullname, email, profilename, gender, password } = req.body;

        // Validate incoming data
        const validate = signUpSchema.validate(req.body, { abortEarly: false });
        if (validate.error) {
            return res.status(400).json({ error: validate.error.details.map(d => d.message) });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ fullname }, { email }] });
        if (existingUser) {
            return res.status(401).json({ error: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullname}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${fullname}`;

        // Create a new user instance
        const newUser = new User({
            fullname,
            email,
            profilename,
            gender,
            password: hashedPassword,
            profilePic : gender === 'male' ? boyProfilePic : girlProfilePic
        });

        // Save the new user
        await newUser.save();

        // Generate and send token
        generateToken(newUser._id, res);

        // Respond with user details
        res.status(201).json({
            fullname: newUser.fullname,
            id: newUser._id,
            email: newUser.email,
            gender: newUser.gender,
            id :  newUser._id,
            profilePic  : newUser.profilePic
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error("Error in Signup", err.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const { fullname, password } = req.body;
        const user = await User.findOne({ fullname });
        const correctPassword = await bcrypt.compare(password, user?.password || "")
        if (!user || !correctPassword) return res.status(400).json({ error: "Invalid username and password" })

        generateToken(user._id, res)

        res.status(201).json({
           fullname : user.fullname,
           profilename : user.profilename,
           gender : user.gender,
           profilePic : user.profilePic,
           email : user.email,
           id : user._id
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log("Error in login User", err.message)
    }
}

const logoutUser = async (req ,res) => {
    try {
     res.cookie("jwt" ,'' , {maxAge : 0});
     res.status(201).json({message : "User logout successfully"})
        
    } catch (err) {
        res.status(500).json({message : err.message})
        console.log(("Error in logoutUser",err.message))
    }
}

module.exports = { signUp, loginUser ,logoutUser };

