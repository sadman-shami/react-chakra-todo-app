import React, { createContext } from "react";

const TodoContext = createContext();

const TodoProvider = (props) => {
  return (
    <TodoContext.Provider value={props.data} {...props}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext };
export default TodoProvider;
