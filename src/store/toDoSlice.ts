import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosState } from "../interfaces";


const initialState: TodosState = {
    list: [],
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action : PayloadAction<string>) {
            state.list.push({
                id: new Date().toLocaleString(),
                title: action.payload,
                compleated: false
            }); 
            

        },
        toggleTodo(state, action : PayloadAction<string>) {
            const toggledTodo = state.list.find(todo=>todo.id === action.payload);
            if(toggledTodo){
                toggledTodo.compleated = !toggledTodo.compleated;
            }
            

        },
        delTodo(state, action : PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },
    },
})

export const { addTodo, toggleTodo, delTodo } = todoSlice.actions;

export default todoSlice.reducer;