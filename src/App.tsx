import { useState } from 'react'
import './App.css'
import { TodoLabel } from './components/todoLabel/TodoLabel'
import { TodoList } from './components/todoList/TodoList'
import { Todos } from './interfaces';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos]  = useState<Todos[]>([]);
  
  const addTodo  = () => {
    if (text.trim().length) {
      setTodos(
        [
          ...todos,
        {
          id: new Date().toISOString(),
          text,
        }
      ]
      )
      setText('')
      
    }
  }
  const delTodo = (todoId:string) =>{
    setTodos(todos.filter((todo=>todoId !== todo.id)))
  }
  return (

    <section id='app' className='container'>
      <div className='container'>
        <TodoList todos={todos} delTodo={delTodo}/>
        <TodoLabel handleInput={setText} handleSubmit={addTodo} text={text} />
      </div>
    </section>

  )
}

export default App
