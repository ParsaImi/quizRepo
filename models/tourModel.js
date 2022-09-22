const mongoose = require('mongoose')
const TourSchema = new mongoose.Schema({
    name : {type : String , required : [true , "a tour need name"]},
    desc : {type : String , required : [true , "a tour need desc"]}
})


const Tour = mongoose.model("Tour" , TourSchema)
module.exports = Tour