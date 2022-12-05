import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    username: String,
    password: String,
    created_at: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model('hannyuser', userScheme);

export default User;