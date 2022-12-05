import jwt from 'jsonwebtoken';
import User from '../Models/User.js';
import dotenv from 'dotenv';
dotenv.config();


const SECRET = process.env.SECRET;
export const isLoggedIn = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({ message: 'Error not authorized to access this resource ' });
        } else {
            const token = req.headers.authorization.split(" ")[1];
            if (token) {
                const payload = await jwt.verify(token, SECRET);
                if (payload) {
                    let user = await User.findOne({ username: payload.username });
                    req.user = user;

                    next();
                } else {
                    res.status(400).json({ message: 'Failed to verify ' });
                }
            } else {
                res.status(400).json({ message: 'Error with Authorization Header' });
            }
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};