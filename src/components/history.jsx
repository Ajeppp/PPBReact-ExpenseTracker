import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function DataIncome() {
    return (
        <Heading size='md' border='4px' borderColor='#1f2124' borderLeftColor='#3EC70B' my='15px' mx='15px' textAlign='left'>Rp</Heading>
    )
}

export default function History(props) {
    return (
        <Flex className="HistoryPart" my='10px' gap='20px'>
            <Box className="ExpensePart" border='4px' borderColor='#3F4E4F' width='300px' height='300px'>
                <Box className="HeaderExpense" width='296px' bg='#3F4E4F'>
                    <Heading size='md' mx='10px' textAlign='left'>Expense</Heading>
                </Box>
                {props.data.Expense.map((history) =>
                    <Heading size='md' border='4px' borderColor='#1f2124' borderLeftColor='#F15412' my='15px' mx='15px' textAlign='left'>Rp{history}</Heading>
                )}
            </Box>
            <Box className="IncomePart" border='4px' borderColor='#3F4E4F' width='300px' height='300px'>
                <Box className="HeaderExpense" width='296px' bg='#3F4E4F'>
                    <Heading size='md' mx='10px' textAlign='left'>Income</Heading>
                </Box>
                {props.data.Income.map((history) =>
                    <Heading size='md' border='4px' borderColor='#1f2124' borderLeftColor='#3EC70B' my='15px' mx='15px' textAlign='left'>Rp{history}</Heading>
                )}
            </Box>
        </Flex >
    )
}