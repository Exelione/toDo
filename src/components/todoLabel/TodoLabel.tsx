import { TodoLabelProps } from '../../interfaces';
import styles from './styles.module.css';


export const TodoLabel = ({handleInput, handleSubmit,text} :TodoLabelProps)  => {
  return (

    <label className={styles.addTodo}>
      <input value={text} id='todoInp' placeholder='add todo' autoComplete='off' onChange={(e)=>handleInput(e.target.value)}  />
      <button type='button' className='defBtn' translate='no' onClick={handleSubmit}><span className="material-icons">
        navigate_next
      </span></button>
    </label>
  )
}

