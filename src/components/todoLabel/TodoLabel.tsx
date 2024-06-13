import styles from './styles.module.css';

export interface TodoLabelProps{
  handleInput: (_:string)=> void,
  handleSubmit: ()=>void,
  text: string
}
export const TodoLabel = ({handleInput, handleSubmit,text} :TodoLabelProps)  => {
  return (

    <label className={styles.addTodo}>
      <input value={text} id='todoInp' placeholder='add todo' autoComplete='off' onChange={(e)=>handleInput(e.target.value)}  />
      <button type='button' className='defBtn' onClick={handleSubmit}><span className="material-icons">
        navigate_next
      </span></button>
    </label>
  )
}

