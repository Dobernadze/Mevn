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

const url ='mongodb://localhost:27017'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedtopology: true
}) 
.then(()=>{
    console.log('MongoDB connected')
})
.catch(err => console.log(err))

app.use(bodyParser.json())

//routes
app.get('/', (res, req)=> {
    res.send("yay home page")
})

const TodosRoute = require('./routes/Todos')
app.use('/todos', TodosRoute)

//start server
app.listen(3000, ()=>{
    console.log('Listening at port 3000')
})