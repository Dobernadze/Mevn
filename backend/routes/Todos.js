const express = require('express');
const route = express.Router();
const Todo = require('../models/Todos')

//Get All Todo route
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})
//Create new Todo
router.post('/new', async(res, req) => {
    const newTodo = new Todo(
        //req.body  //What the Vue App is sending
        {
            author: 'Flanders',
            todo:'Go to Canada'
        }
    )
    const savedTodo = await Todo.save();
    res.json(savedTodo);
})




//Getter by id
router.get('/get/:id', async(res, req) => {
    const t = await Todo.findById({ _id: req.params.id });
    res.json(t);
})

//Delete by id
router.delete('/delete/:id', async(res, req) => {
    const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.json(tDelete);
})


//Update by id
router.put('/update/:id', async(res, req) => {
    const tUpdate = await Todo.updateOne(
        //{_id: req.params.id}, {$set: req.body}
        { 
        author:'Bart',
        todo:'Skating'
     });
    res.json(tUpdate);
})


module.exports = router