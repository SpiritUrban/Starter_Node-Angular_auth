let mongoose = require('mongoose');

const User = mongoose.model('User', { 
    userName: { type: String, index: true, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    password: String,
    token: String,
    created: { type: Date, default: Date.now },
});

module.exports = User;