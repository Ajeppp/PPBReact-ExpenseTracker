import {
  Flex,
  useColorMode,
  useColorModeValue,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Header from "./components/header";
import Body from "./components/body";

function App() {
  const [buttonActive, setButtonActive] = useState(false);
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue(
    "linear(to-l, #0D0A14, #1E2844, #6A0E63)",
    "linear(to-l, #134E5E, #71B280)"
  );
  const color = useColorModeValue("white", "gray.800");
  const button = useColorModeValue("black", "white");

  function buttonHandle() {
    setButtonActive(!buttonActive);
    toggleColorMode();
  }

  return (
    <Box
      h="100vh"
      gap="100px"
      textAlign="center"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textColor="#EEEEEE"
      bgGradient={bg}
    >
      <Box display="flex" w="100vw" alignItems="center">
        <Button
          size="sm"
          margin="20px"
          color={color}
          bg={button}
          _hover={{ color: { color }, bg: { button } }}
          onClick={buttonHandle}
        >
          {buttonActive ? <FaMoon /> : <FaSun />}
        </Button>
      </Box>
      <Flex
        className="App"
        h="80vh"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Header />
        <Body />
      </Flex>
    </Box>
  );
}

export default App;
