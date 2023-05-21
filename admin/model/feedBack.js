const mongoose = require('mongooose')


const feedback= new mongoose.Schema({

    fName:{
        type:String,
        required:true,
    },
    lName:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }
})
const Support = mongoose.model("FEEDBACK", roomsInfo)
module.exports = Support