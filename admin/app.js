const mongoose = require('mongoose')
const express = require('express')
const dotenv=require('dotenv')
const cookieParser = require('cookie-parser');
const User=require("./model/userSchema")
const cors = require('cors');
const bodyparser = require('body-parser')

dotenv.config({path:"./config.env"})
require("./db/conn")

// We had added our file from router

const app = express();
app.use(express.json())
app.use(require('./Router/Auth'))
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000' 
  }));
app.use(bodyparser.json())
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

    const PORT=process.env.PORT

      


    app.get('/about', (req, res) => {
        res.send("hello about") 
    }) 
    app.listen(PORT ,()=>{
        console.log("listening At " + PORT)
    })