const jwt = require("jsonwebtoken")
const { models } = require("mongoose")
const User= require("../model/userSchema")
const cookieParser = require('cookie-parser');
 
const authondicate= async ( req, res, next)=>{

    try{
            const token1= req.cookies.cootoken
            console.log(token1)
            const verifyToken= jwt.verify(token1,process.env.PASS_KEY)

            const rootUser= await User.findOne({_id:verifyToken._id, "tokens.token":token1})
        if(!rootUser){throw new Error("User Not found")}
            req.token=token1;
            req.rootUser=rootUser;
            req.userID= rootUser._id;

            next();
    }catch(err){

            res.status(401).send('unauthorized: no token provided')
            console.log(err)
    }

}
    module.exports=authondicate