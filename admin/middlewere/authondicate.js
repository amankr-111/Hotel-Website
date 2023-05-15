const jwt = require("jsonwebtoken")
const { models } = require("mongoose")
const User= require("../model/userSchema")
 
const Authondicate= async ( req, res, next)=>{

    try{
            const token= req.cookies.jwToken
            const verifyToken= jwt.verify(token,process.env.PASS_KEY)

            const rootUser= await User.findOne({_id:verifyToken._id, "token.token":token})
        if(!rootUser){throw new Error("User Not found")}
            req.token=token;
            req.rootUser=rootUser;
            req.userID= rootUser._id;

            next();
    }catch(err){

            res.status(401).send('unauthorized: no token provided')
            console.log(err)
    }

}
    module.exports=Authondicate