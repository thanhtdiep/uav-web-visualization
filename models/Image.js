const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image: Object,
    target: Array
}) ;

// Create collection and add schema
const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;