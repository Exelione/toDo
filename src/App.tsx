import { useState } from 'react'
import './App.css'
import { TodoLabel } from './components/todoLabel/TodoLabel'
import { TodoList } from './components/todoList/TodoList'
import { useDispatch } from 'react-redux';
import { addTodo} from './store/toDoSlice';

function App() {
 
  
 
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text))
    setText('')
}

  return (

    <section id='app' className='container'>
      <div className='container'>
        <TodoList />
        <TodoLabel handleInput={setText} handleSubmit={addTask} text={text} />
      </div>
    </section>

  )
}

export default App
