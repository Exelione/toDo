export interface Todo {
  id: string,
  title: string,
  compleated: boolean,
}
export interface TodosState{
  list: Todo[]
}
export interface TodoItemProps{
  title: string,
  id: string,
  compleated: boolean,
}
export interface TodoLabelProps{
  handleInput: (_:string)=> void,
  handleSubmit: ()=>void,
  text: string
}