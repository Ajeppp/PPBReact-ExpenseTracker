import { React, useState } from "react";
import { Box, Button, InputLeftAddon, InputGroup, FormControl, NumberInput, NumberInputField, FormHelperText, FormErrorMessage, Heading, Flex, Input } from "@chakra-ui/react";
import History from "./history";

export default function Body() {
    const [saldo, setSaldo] = useState(0);
    const [input, setInput] = useState(0);
    const [data, setData] = useState({
        Expense: [],
        Income: [],
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
        } else {
            setData({
                Expense: [...data.Expense, parseInt(Math.abs(input))],
                Income: [...data.Income],
            });
        }
        setSaldo((prevVal) => prevVal + parseInt(input));
        console.log("masuk");
    }

    function check(e) {
        e.preventDefault();
        if (!parseInt(input)) {
            console.log("kosong");
        } else {
            handleSubmit();
        }
    }

    return (
        <Flex className="Bungkus" gap='20px' flexDir='column' justifyContent='center' alignItems='center'>
            <Box className="Body">
                <Box className='Saldo'>
                    <Heading fontSize='lg' my='10px'>Your Balance: Rp{saldo}</Heading>
                </Box>
                <Box className='InputUser' as='form' width='200px' onSubmit={check}>
                    <FormControl isInvalid={isError} my='10px'>
                        <InputGroup>
                            <InputLeftAddon color='#FFFFFF' bg='#3F4E4F' borderColor='#3F4E4F' children='Rp' />
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
            <History data={data} />
        </Flex>
    )
}