const yargs = require("yargs");
const { updateOne } = require("./model");
const Movie = require("./model");

exports.createMovie = async (movieObj) => {
    try {console.log(movieObj);
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);}
    catch (error) {console.log(error);}};

exports.updateMovie = async (movieObj) =>{
    try {
        const updatedMovie = await Movie.find({title: movieObj.title, actor: movieObj.actor});
        const updates = {title: movieObj.newTitle, actor: movieObj.newActor};
        await Movie.updateOne({updatedMovie}, {$set: updates });
        console.log(updatedMovie);
        }
    catch (error) {console.log(error);}};