import { Box, Button, Flex, Heading, Text, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import React from "react";
import { MdHistory } from "react-icons/md";

export default function Total(props) {
    return (
        <Flex className="BungkusTotal" gap='20px' flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
            <Flex className="BungkusTotalExpense" border='4px' borderColor='#3F4E4F' width='200px' height='80px' gap='20px'>
                <Box display='flex' flexDir="column" justifyContent='center' mx='20px'>
                    <Text textAlign='left' fontSize='large'>Expense</Text>
                    <Text textAlign='left' color='#F15412' fontWeight='bold' fontSize='large'>${props.total.Expense}</Text>
                </Box>
                <Box display='flex' flexDir="column" justifyContent='center'>
                    <Popover isLazy>
                        <PopoverTrigger>
                            <Button bg='#3F4E4F' fontSize='xl' _hover={{ bg: '#3F4E4F' }}><MdHistory /></Button>
                        </PopoverTrigger>
                        <PopoverContent bg='#374045' textAlign='left'>
                            <PopoverHeader fontWeight='semibold' color='#FFFFFF' mx='15px'>Expense</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody bg='#374045'>
                                {props.data.Expense.map((history) =>
                                    <Heading size='sm' mx='15px' color='#F15412' textAlign='left'>${history}</Heading>
                                )}
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
            </Flex>
            <Flex className="BungkusTotalExpense" border='4px' borderColor='#3F4E4F' width='200px' height='80px' gap='20px'>
                <Box display='flex' flexDir="column" justifyContent='center' mx='20px'>
                    <Text textAlign='left' fontSize='large' >Income </Text>
                    <Text textAlign='left' color='#3EC70B' fontWeight='bold' fontSize='large'>${props.total.Income}</Text>
                </Box>
                <Box display='flex' flexDir="column" mx='4px' justifyContent='center'>
                    <Popover isLazy>
                        <PopoverTrigger>
                            <Button bg='#3F4E4F' fontSize='xl' _hover={{ bg: '#3F4E4F' }}><MdHistory /></Button>
                        </PopoverTrigger>
                        <PopoverContent bg='#374045' textAlign='left'>
                            <PopoverHeader fontWeight='semibold' color='#FFFFFF' mx='15px'>Income</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody bg='#374045'>
                                {props.data.Income.map((history) =>
                                    <Heading size='sm' mx='15px' color='#3EC70B' textAlign='left'>${history}</Heading>
                                )}
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
            </Flex>
        </Flex>
    )
}