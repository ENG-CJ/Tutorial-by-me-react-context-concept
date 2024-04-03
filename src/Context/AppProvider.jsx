import { createContext, useReducer } from "react";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./TodoActions/TodoActions";

//initial
const initialState = {
  allTodo: [
    { id: Math.random(), text: "Coding", completed: true },
    { id: Math.random(), text: "C1", completed: true },
    { id: Math.random(), text: "C2", completed: true },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("todo", "add");
      return {
        ...state,
        allTodo: [...state.allTodo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        allTodo: state.allTodo.filter((todo) => todo.id != action.payload),
      };
    case TOGGLE_TODO:
      const updatedAllTodo = state.allTodo.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

      return {
        ...state,
        allTodo: updatedAllTodo,
      };
  }
};

// context creating
export const AppContext = createContext();

// PROVIDER
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todoItem) => {
    dispatch({
      type: ADD_TODO,
      payload: todoItem,
    });
  };
  const toggleTodo = (id) => {
    console.log("the id is ", id);
    dispatch({
      type: TOGGLE_TODO,
      payload: id,
    });
  };
  return (
    <AppContext.Provider
      value={{
        todoList: state.allTodo,
        addTodo,
        toggleTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
