import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
    return (
        <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='bold'
        >
            TracPense
        </Text>
        // <Heading fontSize='4xl' my='10px' bgGradient='linear(to-l, #7928CA, #FF0080)'>TrackPense</Heading>
    )
}