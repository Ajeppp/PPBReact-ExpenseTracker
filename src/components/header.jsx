import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
    return (
        <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}
            fontWeight='bold'
        >
            TracPense
        </Text>
    )
}