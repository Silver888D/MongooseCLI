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
    else if (movieObj.director){
        const result = await Movie.find({director: movieObj.director,});
        console.log(result);}
    else if (movieObj.date){
        const result = await Movie.find({date: movieObj.date,});
        console.log(result);}
                                            };


exports.updateMovie = async (movieObj) => {
    try {
        
        const updates = {  actor: movieObj.newActor, director: movieObj.newDirector, date: movieObj.newDate, };
        await Movie.updateOne({ title: movieObj.title }, { $set: updates });
        console.log(updates);}
    catch (error) {console.log(error);}
                                            };


exports.deleteMovie = async (movieObj) => {
    const deletes = await Movie.deleteOne({title: movieObj.title, actor: movieObj.actor, director: movieObj.director, date: movieObj.date});
    console.log(deletes);
                                            };

// const updatedMovie = await Movie.find({title: movieObj.title, actor: movieObj.actor, director: movieObj.director, date: movieObj.date,});