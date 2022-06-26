import { React, useState } from "react";
import { Box, Button, FormControl, NumberInput, NumberInputField, FormHelperText, FormErrorMessage, Heading } from "@chakra-ui/react";


export default function Body(props) {
    const [saldo, setSaldo] = useState(0);
    const [data, setData] = useState({
        Expense: [],
        Income: [],
    });

    const isError = props.input === '' || props.input === (0);

    function updateInput(e) {
        const inputTemp = e.target.value;
        props.setInput(inputTemp);
    }

    function handleSubmit() {
        // e.preventDefault();
        setSaldo((prevVal) => prevVal + parseInt(props.input));
        console.log("masuk");
    }

    function check(e) {
        e.preventDefault();
        if (!parseInt(props.input)) {
            console.log("kosong");
        } else {
            handleSubmit();
        }
    }

    return (
        <Box className="Body">
            <Box className='Saldo'>
                <Heading fontSize='lg' my='10px'>Your Balance: Rp{saldo}</Heading>
            </Box>
            <Box className='InputUser' as='form' onSubmit={check} display='flex' justifyContent='center' alignItems='center' flexDir='column'>
                <FormControl isInvalid={isError} my='10px'>
                    <NumberInput max={100000000} min={-100000000}>
                        <NumberInputField onChange={updateInput} borderColor='#393E46' bg='#00ADB5' color='#0A0908' _hover={{ color: '#0A0908', bg: '#00ADB5' }} />
                    </NumberInput>
                    {!isError ? (
                        <FormHelperText>
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Input Can't Be Empty.</FormErrorMessage>
                    )}
                    <Button my='7px' type="submit" color='#0A0908' bg='#00ADB5' _hover={{ color: '#0A0908', bg: '#00ADB5' }}> Hitung </Button>
                </FormControl>
            </Box>
        </Box>
    )
}