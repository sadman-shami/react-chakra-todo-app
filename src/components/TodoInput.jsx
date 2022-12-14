import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const [todo, setTodo] = useState({ todo: "" });
  const toast = useToast();
  const { dispatch } = useContext(TodoContext);

  const handleInput = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (todo.todo === "") {
      toast({
        title: "Input field can not be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
        variant: "left-accent",
        position: "top-left",
      });
    } else {
      dispatch({
        type: "addTodo",
        todo: { id: Date.now(), title: todo.todo, completed: false },
      });
      setTodo({ todo: "" });
    }
  };

  return (
    <React.Fragment>
      <Flex direction="column" gap={3} padding={6}>
        <Input
          placeholder="Add a Todo"
          padding="1.5rem 1rem"
          value={todo.todo}
          onChange={handleInput}
          name="todo"
          width="100%"
        />
        <Button
          bg="teal.400"
          _hover={{ bg: "teal.500" }}
          _focus={{ bg: "teal.600" }}
          color="white"
          p={5}
          onClick={handleSubmit}
          boxShadow="md"
        >
          Add Todo
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default TodoInput;
