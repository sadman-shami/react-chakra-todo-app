import React, { createContext, useReducer, useEffect } from "react";
import { initialValue, reducer } from "../reducer";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [todos, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todos = JSON.parse(localStorage.getItem("todos"));
      dispatch({
        type: "getTodo",
        data: [...todos],
      });
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos: todos.todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext };
export default TodoProvider;
