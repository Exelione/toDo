import { TodoItemProps } from '../../interfaces';
import styles from './styles.module.css';


const TodoItem = ({ text, id, delTodo, toggleTodo, compleated }: TodoItemProps) => {

  return (

    <li className={compleated? styles.compleated :styles.todo}>
      <label className={styles.checkbox}   >
        <input type="checkbox" checked={compleated} onClick={()=>toggleTodo(id)} />
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline>
        </svg>
        </span>
        <p>{text}</p>
        <div className={styles.checkboxDate}>{new Date().toLocaleDateString('en-CA')}</div>
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

