import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/User.js";
import Role from "../models/Role.js";



export const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: "No token provided" });

        const decoded = jwt.verify(token, config.SECRET_KEY)
        req.userId = decoded.id
        const user = await User.findById(decoded.id, { password: 0 });

        if(!user) return res.status(404).json({ message: "no user found" });

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i = 0; i < roles.length; i++) {
        console.log("DDD: ", roles[i].name);
        if (roles[i].name === 'moderator') {
            next();
            return;
        }
    }

    return res.status(403).json({ message: "Permisos Insuficientes" }); 

}

export const isAdmin = async (req, res, next) => {}

export const isUser = async (req, res, next) => {}
