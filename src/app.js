require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, updateMovie, readMovie, deleteMovie, } = require("./movie/functions");
const {   createTv, readTv, updateTv, deleteTv } = require("./tv/functions");

const app = async (yargsObj) => {
    if (yargsObj.create) {await createMovie(
        { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, date: yargsObj.date, });}

    else if (yargsObj.read) {await readMovie(
        { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, date: yargsObj.date, });}

    else if (yargsObj.update) {await updateMovie(
        { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, date: yargsObj.date, newTitle: yargsObj.newTitle, newActor: yargsObj.newActor, newDirector: yargsObj.newDirector, newDate: yargsObj.newDate   });}

    else if (yargsObj.delete) {await deleteMovie(
        { title: yargsObj.title, });}

    else if (yargsObj.createTv) {await createTv(
        { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, date: yargsObj.date, });}
    
    else if (yargsObj.readTv) {await readTv(
        { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, date: yargsObj.date, });}
    
    else if (yargsObj.updateTv) {await updateTv(
        { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, date: yargsObj.date, newTitle: yargsObj.newTitle, newActor: yargsObj.newActor, newDirector: yargsObj.newDirector, newDate: yargsObj.newDate   });}
    
    else if (yargsObj.deleteTv) {await deleteTv(
        { title: yargsObj.title});}

    else {console.log("Incorrect command");}

    await mongoose.disconnect();};

app(yargs.argv);