import { Box, Heading, Text, useColorMode, Button } from "@chakra-ui/react";
import React from "react";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box className="Header">
            {/* <Heading>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </Heading> */}
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
                fontWeight='bold'
            >
                iPense
            </Text>
        </Box>
    )
}