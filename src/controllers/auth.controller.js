import User from "../models/User.js";
import config from "../config.js";
import jwt from "jsonwebtoken";
import Role from "../models/Role.js";

export const signUp = async (req, res) => {

    const { username, email, password, roles } = req.body

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles }});
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await foundRoles.findOne({ name: "user" })
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id}, config.SECRET_KEY, {
        expiresIn: 86400
    })

    res.json({
        user: newUser,
        token
    });
}


export const signIn = async (req, res) => {

    const userFound = await User.findOne({ email: req.body.username }).populate("roles");

    if (!userFound) return res.status(400).json({ messaage: "User not found" });

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(401).json({ token: null, message: "Invalid Credentials" });

    const token = jwt.sign({ id: userFound._id}, config.SECRET_KEY, {
        expiresIn: 86400
    })

    res.json({
        user: userFound, 
        token
    });
}