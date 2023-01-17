import User from "../Models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SALT_ROUNDS = 10;
const SECRET = process.env.SECRET;

// Check if user is in DB 
const isUserExists = async (username) => {
    const user = await User.findOne({ username });
    return user;
};

//Login
export const login = async (req, res) => {
    const token = await jwt.sign({ username: 'hanny' }, SECRET);
    return res.status(201).json(token);

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username or Passoword not provided' });
    }
    try {

        const user = await isUserExists(username);


        if (!user) {

            return res.status(403).json({ message: 'You are unauthorized from accessing the plattform' });
        }


        console.log(user);
        // Check Password 
        const match = await bcrypt.compare(password[0], user.password);

        if (!match) {
            return res.status(400).json({ message: 'Username or Passowrd incorrect' });
        } else {

            const token = await jwt.sign({ username: username }, SECRET);
            return res.status(201).json(token);
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

};

// Register 
export const register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username or Passoword not provided' });
    }
    const user = await isUserExists(username);
    if (user) {
        return res.status(200).json({ message: 'User Already present' });
    }

    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new User({ username, password: hashPassword });

    try {
        await newUser.save();
        return res.status(201).json({ message: 'Success', data: 'data' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};