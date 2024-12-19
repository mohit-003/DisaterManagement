const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    capacity: Number,
    resources: {
        food: Number,
        water: Number,
        medical: Number,
    },
});

module.exports = mongoose.model('Shelter', shelterSchema);
