const mongoose = require('mongoose')


const bookedData= new mongoose.Schema({

    hname:{
        type:String,
        required:true,
    },
    nroom:{
        type:String,
        required:true,
    },
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    amm:{
        type:String,
        required:true,
    },
})
const bookedData1 = mongoose.model("BOOKEDDATA", bookedData)
module.exports = bookedData1