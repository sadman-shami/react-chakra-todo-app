import { VStack } from "@chakra-ui/react";
import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
import TodoProvider from "./context/TodoContext";

const App = () => {
  return (
    <React.Fragment>
      <TodoProvider>
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
