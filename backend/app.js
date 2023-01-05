//
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//create out express app
const app = express()

//Handle CORS + middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE') //if using .fetch and not axios
    res.header('Access-Control-Allow-Headers', 'auth-token, Origin, X-Requested-With, Content-Type, Accept')
    next()
})

//database stuff

const url ='mongodb+srv://qwerty:<password>@cluster0.v5n9urc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedtopology: true
}) 
.then(()=>{
    console.log('MongoDB connected')
})
.catch(err => console.log(err))