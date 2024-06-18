export interface Todo {
  id: string,
  text: string,
  compleated: boolean
}
export interface TodosProps {
  todos?: Todo[],
  delTodo: (_: string) => void,
  toggleTodo: (id: string) => void,
  id?: string,


}

export interface TodoItemProps {
  compleated?: boolean,
  todo?: Todo,
  text: string,
  id: string,
  delTodo: (id: string) => void,
  toggleTodo: (id: string) => void,

}
export interface TodoLabelProps {
  todos?: Todo[],
  handleInput: (_: string) => void,
  handleSubmit: () => void,
  text: string
}