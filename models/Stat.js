const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatSchema = new Schema({
    temperature: Number,
    pressure: Number,
    humidity: Number,
    light: Number,
    noise: Number,
    reducing: Number,
    oxidizing: Number,
    nh3: Number,
    pm1: Number,
    pm25: Number,
    pm10: Number,
    time: String
});

// Create collection and add schema
const Stat = mongoose.model('Stat', StatSchema);

module.exports = Stat;