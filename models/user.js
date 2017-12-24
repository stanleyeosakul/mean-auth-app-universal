const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Initalize Schema
const Schema = mongoose.Schema

// Define a UserSchema
const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Define and Export Model
const User = mongoose.model('User', UserSchema);
module.exports = User;

// Query Functions
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
    const query = { username }
    User.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => { 
    bcrypt.genSalt(10)
        .then((salt) => bcrypt.hash(newUser.password, salt))
        .then((hash) => {
            newUser.password = hash;
            newUser.save(callback);
        }).catch((err) => console.log('There was an error adding a user.'));
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash)
        .then((isMatch) => {
            callback(null, isMatch);
        }).catch((err) => console.log('There was an error with authentication.'));
    }
