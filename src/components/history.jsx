import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function DataExpense() {
    return (
        <Box bg='#e00b16' mx='15px' my='10px'>
            <Heading size='md' my='15px' mx='5px' textAlign='left'>Rp5000</Heading>
        </Box>
    )
}

function DataIncome() {
    return (
        <Box bg='#25523e' mx='15px' my='10px'>
            <Heading size='md' my='15px' mx='5px' textAlign='left'>Rp</Heading>
        </Box>
    )
}

export default function History() {
    return (
        <Flex className="HistoryPart" my='10px' gap='20px'>
            <Box className="ExpensePart" bg='#962109' width='300px' height='300px'>
                <DataExpense />
            </Box>
            <Box className="IncomePart" bg='#346751' width='300px' height='300px'>
                <DataIncome />
            </Box>
        </Flex >
    )
}