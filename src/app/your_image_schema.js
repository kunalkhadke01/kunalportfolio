const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: String
})

const Image = mongoose.model('webcamImage', ImageSchema);

module.exports = Image;