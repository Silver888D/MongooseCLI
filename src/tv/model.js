const mongoose = require("mongoose");

const tvSchema = new mongoose.Schema({
    title: {type: String, unique: true, required: true,},
    actor: {type: String, default: 'Not Specified',},
    director: {type: String, default: 'Not Specified',},
    date: {type: Number, required: true,}});

const Tv = mongoose.model('Tv', tvSchema);


module.exports = Tv;