const mongoose = require('mongoose')


const DB=process.env.DATABASE

const database= module.exports=()=>{
    const connectionParams ={
        useNewUrlParser: true,    
        useCreateIndex: true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }
    try{
        mongoose.connect(DB)
        console.log("Connection succssfull")
    } catch(error){
        console.log(error)
        console.log("connection failed")
    }
}
database()