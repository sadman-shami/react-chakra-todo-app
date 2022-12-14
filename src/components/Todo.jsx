import { Box, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ text, status, todoId }) => {
  const { dispatch } = useContext(TodoContext);
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const lineColor = useColorModeValue("gray.800", "gray.300");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      columnGap={6}
      bg={bgColor}
      width={{ base: "100%", md: "500px" }}
      p={4}
      borderRadius={8}
    >
      <Box
        position="relative"
        transition="opacity 0.9s"
        opacity={status ? "0.5" : "1"}
      >
        <Box
          position="absolute"
          h="1.5px"
          bg={lineColor}
          zIndex="10"
          width={status ? "100%" : "0%"}
          top="50%"
          left="0"
          transition="width 0.9s"
          pointerEvents="none"
        />
        <Text
          cursor="pointer"
          onClick={() => {
            dispatch({
              type: "upDateStatus",
              todoId,
            });
          }}
          position="relative"
        >
          {text}
        </Text>
      </Box>
      <IconButton
        icon={<FaTrash />}
        borderRadius={20}
        onClick={() => {
          dispatch({
            type: "deleteTodo",
            todoId,
          });
        }}
      />
    </Box>
  );
};

export default Todo;
