import { useState } from 'react'
import './App.css'
import { TodoLabel } from './components/todoLabel/TodoLabel'
import { TodoList } from './components/todoList/TodoList'
import { useLocalStorageState } from './actionTypes';
import { Todo } from './interfaces';

function App() {
  const ls = localStorage;
  
 
  const [text, setText] = useState('');
  const [todos, setTodos] = useLocalStorageState('todos', [])

  const addTodo = () => {
    const todo : Todo = {
      id: new Date().toISOString(),
      text,
      compleated: false
    }
    if (text.trim().length) {
      ls.setItem('todos', JSON.stringify(todo))
      setTodos([...todos, todo])
      
      setText('')
     

    }
   
  }
  
  const toggleTodo = (todoId: string)=>{
    setTodos(todos.map((todo : Todo) => {
      if(todo.id !== todoId)return todo
      return {
        ...todo,
        compleated: !todo.compleated
      } 
    }))
  }
  console.log(todos)
  const delTodo = (todoId: string) => {
    setTodos(todos.filter((todo: Todo ) => todoId !== todo.id))
  }
  return (

    <section id='app' className='container'>
      <div className='container'>
        <TodoList todos={todos} toggleTodo={toggleTodo} delTodo={delTodo} />
        <TodoLabel handleInput={setText} handleSubmit={addTodo} text={text} />
      </div>
    </section>

  )
}

export default App
