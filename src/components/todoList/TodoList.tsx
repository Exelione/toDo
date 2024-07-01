
import TodoItem from '../todoItem/TodoItem';
import styles from './styles.module.css';
import { useAppSelector } from '../../hook';

export const TodoList = () => {
  const todos = useAppSelector(state => state.todoList.list);
  return (

    <ul className={styles.todoList} translate='no'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />))}
    </ul>
  )
}

