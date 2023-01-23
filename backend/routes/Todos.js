const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');
const { res } = require('express');

//Get All Todo route
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})
//Create new Todo
router.post('/new', async  (req, res) => {
    const newTodo = new Todo(
        req.body  //What the Vue App is sending
        /* {
            author: 'Flanders',
            todo:'Go to Canada'
        } */
    )
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
})




//Getter by id
router.get('/get/:id', async(req, res) => {
    const t = await Todo.findById({ _id: req.params.id });
    res.json(t);
})

//Delete by id
router.delete('/delete/:id', async(req, res) => {
    const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.json(tDelete);
})


//Update by id
router.put('/update/:id', async(req, res) => {
    const tUpdate = await Todo.updateOne(
    {_id: req.params.id}, 
    //{$set: req.body}
        { 
        author:'Bart',
        todo:'Skating'
     });
    res.json(tUpdate);
})


module.exports = router