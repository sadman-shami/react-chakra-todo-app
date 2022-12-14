import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <React.Fragment>
      <Flex
        direction="column"
        rowGap={6}
        maxH="350px"
        overflow="scroll"
        width="100%"
        alignItems="center"
      >
        {todos.length > 0 &&
          todos.map((todo, i) => (
            <Todo
              key={todo.id}
              status={todo?.completed}
              text={todo?.title}
              todoId={todo.id}
            />
          ))}
      </Flex>
    </React.Fragment>
  );
};

export default Todos;
