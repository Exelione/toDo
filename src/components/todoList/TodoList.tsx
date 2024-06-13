
import { TodosProps } from '../../interfaces';
import TodoItem from '../todoItem/TodoItem';
import styles from './styles.module.css';

export const TodoList = ({ todos, delTodo } : TodosProps) => {
  return (

    <ul className={styles.todoList} translate='no'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          delTodo={delTodo}
          {...todo}
        />))}
    </ul>
  )
}

