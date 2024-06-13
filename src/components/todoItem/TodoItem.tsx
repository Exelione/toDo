import { TodoItemProps } from '../../interfaces';
import styles from './styles.module.css';


const TodoItem = ({ text, id, delTodo }: TodoItemProps) => {

  return (

    <li className={styles.todo}>
      <label className={styles.checkbox}>
        <input type="checkbox"  />
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline>
        </svg>
        </span>
        <p>{text}</p>
      </label>
      <button className='defBtn' onClick={() => delTodo(id)}>
        <span className="material-icons">
          close
        </span>
      </button>
    </li>
  )
}
export default TodoItem 

