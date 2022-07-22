const Tv = require('./model');



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
    const deletes = await Tv.deleteOne({title: tvObj.title});
    console.log(deletes);
                                            };