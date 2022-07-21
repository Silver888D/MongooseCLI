require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, updateMovie, readMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.create) {await createMovie(
        { title: yargsObj.title, actor: yargsObj.actor });}

    else if (yargsObj.read) {await readMovie(
        { title: yargsObj.title, actor: yargsObj.actor });}

    else if (yargsObj.update) {await updateMovie(
        { title: yargsObj.title, actor: yargsObj.actor, newTitle: yargsObj.newTitle, newActor: yargsObj.newActor  });}

    else if (yargsObj.delete) {await deleteMovie(
        { title: yargsObj.title, actor: yargsObj.actor });}

    else {console.log("Incorrect command");}

    await mongoose.disconnect();};

app(yargs.argv);