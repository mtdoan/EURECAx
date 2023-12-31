const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username!"],
        unique: [true, "Username taken"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
    },

    firstname: {
        type: String,
        required: [true, "Please provide a name!"],
        unique: false,
    },

    lastname: {
        type: String,
        required: [true, "Please provide a name!"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide an email!"],
        unique: [true, "Email exists"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    isAdmin: {
        type: Boolean,
        require: [true, "Please specify account type!"],
        default: false,
    },
    canvasid: {
        type: String,
        require: true,
        default: ""
    },
    bio: {
        type: String,
        require: [true, "No bio set"],
        default: "I am a new user of EurecaX."
    }
})

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);