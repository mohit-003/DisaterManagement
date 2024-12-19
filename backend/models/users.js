const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    shelterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shelter',
    },
});

module.exports = mongoose.model('User', userSchema);