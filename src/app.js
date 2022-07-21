require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie } = require("./movie/functions");
const Movie = require("./movie/model");

const app = async (yargsObj) => {
    if (yargsObj.create) {
        await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
        //add movie to DB
    } else if (yargsObj.read) {
        const result = await Movie.find({ title: yargsObj.title, actor: yargsObj.actor });
        console.log(result);
        //list all movies from DB
    } else if (yargsObj.update) {
        //update one movie from DB
    } else if (yargsObj.delete) {
        const deletes = await Movie.deleteOne({ title: yargsObj.title, actor: yargsObj.actor });
        console.log(deletes);
        //delete one movie from DB
    } 
    else {console.log("Incorrect command");}
    await mongoose.disconnect();};

app(yargs.argv);