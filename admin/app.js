const mongoose = require('mongoose')
const express = require('express')
const dotenv=require('dotenv')
const cookieParser = require('cookie-parser');
const User=require("./model/userSchema")


dotenv.config({path:"./config.env"})
require("./db/conn")

// We had added our file from router

const app = express();


app.use(express.json())

app.use(require('./Router/Auth'))
app.use(cookieParser());

    const PORT=process.env.PORT


        const middleWare =(req, res, next)=>{
                 console.log("helo medele were")
                  next()
                }
    app.get('/', (req, res) => {
        res.send("hello")
    })
    app.get('/about', (req, res) => {
        res.send("hello about")
    })
    app.get('/support', (req, res) => {
        res.send("hello support")
    })
    app.get('/payment',middleWare, (req, res) => {
        res.send("we are at payment")
    })
    app.listen(PORT ,()=>{
        console.log("listening At " + PORT)
    })