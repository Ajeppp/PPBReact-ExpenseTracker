import { React, useState } from "react";
import { Box, Button, InputLeftAddon, InputGroup, FormControl, Text, FormHelperText, FormErrorMessage, Heading, Flex, Input } from "@chakra-ui/react";
import History from "./history";
import Total from "./total";

export default function Body() {
    const [saldo, setSaldo] = useState(0);
    const [input, setInput] = useState(0);
    const [data, setData] = useState({
        Expense: [],
        Income: [],
    });
    const [total, setTotal] = useState({
        Expense: 0,
        Income: 0,
    });

    const isError = input === '' || input === (0);

    function updateInput(e) {
        const inputTemp = e.target.value;
        setInput(inputTemp);
    }

    function handleSubmit() {
        if (parseInt(input) > 0) {
            setData({
                Expense: [...data.Expense],
                Income: [...data.Income, parseInt(input)],
            });
            setTotal({
                Expense: total.Expense,
                Income: total.Income + parseInt(input),
            });
        } else {
            setData({
                Expense: [...data.Expense, parseInt(Math.abs(input))],
                Income: [...data.Income],
            });
            setTotal({
                Expense: total.Expense + parseInt(Math.abs(input)),
                Income: total.Income,
            });
        }
        setSaldo((prevVal) => prevVal + parseInt(input));
    }

    function check(e) {
        e.preventDefault();
        if (!parseInt(input)) {
        } else {
            handleSubmit();
        }
    }

    return (
        <Flex className="Bungkus" flexDir='column' justifyContent='center' alignItems='center'>
            <Box className="Body">
                <Box className='Saldo' color='#FFFFFF'>
                    <Heading fontWeight='normal' fontSize='lg'>My Balance: <Flex color='#FFFFFF' fontWeight='bold' display='inline-flex'>${saldo}</Flex> </Heading>
                </Box>
                <Box className='InputUser' as='form' width='200px' onSubmit={check}>
                    <FormControl isInvalid={isError} my='10px'>
                        <InputGroup>
                            <InputLeftAddon color='#FFFFFF' bg='#3F4E4F' fontSize='lg' fontWeight='bold' borderColor='#3F4E4F' children='$' />
                            <Input type='number' onChange={updateInput} border='2px' borderColor='#3F4E4F' bg='#1f2124' color='#FFFFFF' _hover={{ color: '#FFFFFF', bg: '#1f2124' }} />
                        </InputGroup>
                        {!isError ? (
                            <FormHelperText>
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Input Can't Be Empty.</FormErrorMessage>
                        )}
                        <Button my='7px' type="submit" color='#FFFFFF' bg='#3F4E4F' _hover={{ color: '#0A0908', bg: '#00ADB5' }}> Hitung </Button>
                    </FormControl>
                </Box>
            </Box>
            <Total total={total} data={data} />
        </Flex>
    )
}