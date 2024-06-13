export interface Todos {
    id: string,
    text: string
}
export interface TodosProps{
    todos: Todos[],
    delTodo: (_:string)=>void,
    id?: string,
}

export interface TodoItemProps{
    text: string,
    id: string,
    delTodo: (id:string)=>void
  }