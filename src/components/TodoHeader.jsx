import {
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const TodoHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgGradient = useColorModeValue(
    "linear(to-r, teal.500, green.500)",
    "linear(to-r, red.500, pink.500)"
  );

  return (
    <React.Fragment>
      <VStack width="100%">
        <IconButton
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          borderRadius={20}
          onClick={toggleColorMode}
          alignSelf="flex-end"
          mb={30}
        />
        <Heading
          color="orange.400"
          bgGradient={bgGradient}
          bgClip="text"
          fontWeight="extrabold"
          fontSize={{
            base: "35px",
            md: "40px",
            lg: "50px",
          }}
        >
          Todo Application
        </Heading>
      </VStack>
    </React.Fragment>
  );
};

export default TodoHeader;
