const bcrypt = require('bcrypt');
const UserModel = require('../models/users');


const signup = async (req, res) => {
    try {
        const { username, email, password, faculty, semester } = req.body;
        const user = await UserModel.findOne({
            $or: [{ email }, { username }]
        });

        if (user) {
            return res.status(400)
            .json({ message: "User already exists", success: false });
        }
        const userModel = new UserModel({
            username,
            email,
            password,
            faculty,
            semester
        });

        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
        .json({ message: "Signup successful", success: true });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500)
        .json({ message: "Internal server error Shakti", success: false });
    }
}

module.exports = {
    signup
}