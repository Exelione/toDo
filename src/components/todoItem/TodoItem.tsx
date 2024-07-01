import styles from './styles.module.css';
import { delTodo, toggleTodo } from '../../store/toDoSlice';
import { TodoItemProps } from '../../interfaces';
import { useAppDispatch } from '../../hook';


const TodoItem = ({ title, id, compleated }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  
  return (

    <li className={compleated? styles.compleated :styles.todo}>
      <label className={styles.checkbox}   >
        <input type="checkbox" checked={compleated} onChange={()=>dispatch(toggleTodo(id))} />
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline>
        </svg>
        </span>
        <p>{title}</p>
        <div className={styles.checkboxDate}>{ id.toString().slice(0,-3)}</div>
      </label>
      <button className='defBtn' onClick={() => dispatch(delTodo(id))}>
        <span className="material-icons">
          close
        </span>
      </button>
    </li>
  )
}
export default TodoItem 

