import {
  Box,
  Heading,
  Text,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return (
    <Box className="Header">
      {/* <Heading>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </Heading> */}
      <Text
        bg={color}
        bgClip="text"
        fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
        fontWeight="bold"
      >
        iPense
      </Text>
    </Box>
  );
}
