import { VStack } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
import TodoProvider from "./context/TodoContext";
import { initialValue, reducer } from "./reducer";

const App = () => {
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
    <React.Fragment>
      <TodoProvider data={{ todos: todos.todos, dispatch }}>
        <VStack padding={6} height="100vh" gap={10}>
          <TodoHeader />
          <Todos />
          <TodoInput />
        </VStack>
      </TodoProvider>
    </React.Fragment>
  );
};

export default App;
