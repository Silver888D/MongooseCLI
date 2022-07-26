const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {type: String, unique: true, required: true,},
    actor: {type: String, default: 'Not Specified',},
    director: {type: String, default: 'Not Specified',},
    date: {type: Number, required: true,}});

const Movie = mongoose.model("Movie", movieSchema);



module.exports = Movie;