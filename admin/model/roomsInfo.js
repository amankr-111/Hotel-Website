const mongoose = require('mongoose')


const roomsInfo= new mongoose.Schema({

    hname:{
        type:String,
        required:true,
    },
    dec:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    }
})
const Rooms = mongoose.model("ROOMINFO", roomsInfo)
module.exports = Rooms