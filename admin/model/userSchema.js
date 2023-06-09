const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    tokens:[{
        token:{
            type:String,
        required:true,
        }
    }]


})


// hashing the password

userSchema.pre('save', async function(next){
    console.log('Hello from inside')
    if (this.isModified('password')){
        this.password= await bcrypt.hash(this.password,12)
    }
    next()
})

// We are generating token

        userSchema.methods.generateAuthToken = async function(){
            try{
                let token= jwt.sign({_id:this._id}, process.env.PASS_KEY)
                this.tokens=this.tokens.concat({token:token});
               await this.save()
               return token
            }catch(err){
console.log(err)
            }
        }
const User= mongoose.model("USER", userSchema)
module.exports = User