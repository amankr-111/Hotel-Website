const jwt = require("jsonwebtoken")
const { models } = require("mongoose")
const User= require("../model/userSchema")
const cookieParser = require('cookie-parser');

 
const authondicate= async ( req, res, next)=>{


    try{
            const cootoken= req.cookies.cootoken
            const verifyToken= jwt.verify(cootoken,process.env.PASS_KEY)
            const rootUser= await User.findOne({_id:verifyToken._id, "tokens.token":cootoken})
        if(!rootUser){throw new Error("User Not found")}
            req.token=cootoken;
            req.rootUser=rootUser;
            req.userID= rootUser._id;

            next();
    }catch(err){

            res.status(401).send('unauthorized: no token provided')
            console.log(err)
    }

}
    module.exports=authondicate