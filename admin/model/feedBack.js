const mongoose = require('mongoose')


const feedback= new mongoose.Schema({

    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }
})
const feedback1 = mongoose.model("FEEDBACK", feedback)
module.exports = feedback1