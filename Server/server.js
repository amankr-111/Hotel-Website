const express = require('express')
const app= express()


app.get("/",(req, res)=>{
    res.render('home.jsx')
})
app.listen(5000)