<template>
    <div class="todos">
        <div v-for ="item in state.todos" :key="item.author">
       
        <h4>{{ item.author }}</h4>
        <p>{{ item.todo }}</p>
        <button @click="deleteTodo(todo._id)">Delete todo</button>
        </div>
        <button @click="newTodo()">New Todo - static</button>
    </div>

</template>
<script>
import todocrud from '../modules/todocrud'
import {onMounted} from 'vue'
export default {
 setup() {

    const {state, GetAllTodos, newTodo, deleteTodo} = todocrud()
   /* const state = reactive({
    todos:{}
   })

   function GetAll(){
    fetch("http://localhost:3000/todos")
      .then(res=> res.json())
      .then(data=> {
        state.todos = data
        //debugger
      })
   } */
   onMounted(() =>{
    GetAllTodos()
   })
  
   return{state, GetAllTodos, newTodo, deleteTodo}
}   
}

</script>
<style lang = "scss" scoped>

</style>