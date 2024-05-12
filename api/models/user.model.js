import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        unique: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type:String,
        require: true, 
    },
    profilePicture: {
        type: String,
        default: "https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg",
    }
}, {timestamp: true});

const User = mongoose.model('User', userSchema);
export default User;