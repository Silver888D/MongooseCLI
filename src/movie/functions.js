const Movie = require("./model");
const Tv = require('./model');

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

exports.createTv = async (tvObj) => {
    try {
        console.log(tvObj);
        const newTv = await Tv.create(tvObj);
        console.log(newTv);}
    catch (error) {console.log(error);}
                                            };


exports.readTv = async (tvObj) => {
    if (tvObj.title){
    const result = await Tv.find({title: tvObj.title,});
    console.log(result);}
    else if (tvObj.actor){
        const result = await Tv.find({actor: tvObj.actor,});
        console.log(result);}
    else if (tvObj.director){
        const result = await Tv.find({director: tvObj.director,});
        console.log(result);}
    else if (tvObj.date){
        const result = await Tv.find({date: tvObj.date,});
        console.log(result);}
                                            };


exports.updateTv= async (tvObj) => {
    try {
        
        const updates = {  actor: tvObj.newActor, director: tvObj.newDirector, date: tvObj.newDate, };
        await Tv.updateOne({ title: tvObj.title }, { $set: updates });
        console.log(updates);}
    catch (error) {console.log(error);}
                                            };


exports.deleteTv = async (tvObj) => {
    const deletes = await Tv.deleteOne({title: tvObj.title, actor: tvObj.actor, director: tvObj.director, date: tvObj.date});
    console.log(deletes);
                                            };






