const Movie = require("./model");

exports.createMovie = async (movieObj) => {
    try {
        console.log(movieObj);
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);}
    catch (error) {console.log(error);}
                                            };


exports.readMovie = async (movieObj) => {
    if (movieObj.title){
    const result = await Movie.find({title: movieObj.title,});
    console.log(result);}
    else if (movieObj.actor){
        const result = await Movie.find({actor: movieObj.actor,});
        console.log(result);}
                                            };


exports.updateMovie = async (movieObj) => {
    try {
        const updatedMovie = await Movie.find({title: movieObj.title, actor: movieObj.actor,});
        const updates = { title: movieObj.newTitle, actor: movieObj.newActor };
        await Movie.updateOne({ updatedMovie }, { $set: updates });
        console.log(updatedMovie);}
    catch (error) {console.log(error);}
                                            };


exports.deleteMovie = async (movieObj) => {
    const deletes = await Movie.deleteOne({title: movieObj.title, actor: movieObj.actor,});
    console.log(deletes);
                                            };
