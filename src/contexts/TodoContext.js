import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "First Todo",
            completed: false
        }
    ],
    addTodo: (todoTitle) => { },
    updateTodo: (todoTitle, id) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider