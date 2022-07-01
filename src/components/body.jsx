import { React, useState } from "react";
import {
  Box,
  Button,
  InputLeftAddon,
  InputGroup,
  FormControl,
  Text,
  FormHelperText,
  FormErrorMessage,
  Heading,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import Total from "./total";

export default function Body() {
  const bg = useColorModeValue("black", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "black");
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

  const isError = input === "" || input === 0;

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
      e.target.reset();
      setInput(0);
    }
  }

  return (
    <Flex
      className="Bungkus"
      height={{ base: "400px", md: "350px", lg: "300px" }}
      width={{ base: "300px", md: "450px", lg: "500px" }}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box className="Body">
        <Box className="Saldo" color={color}>
          <Heading fontWeight="normal" fontSize={{ base: "lg", lg: "xl" }}>
            My Balance:{" "}
            <Flex color={color} fontWeight="bold" display="inline-flex">
              ${saldo}
            </Flex>{" "}
          </Heading>
        </Box>
        <Box className="InputUser" as="form" width="200px" onSubmit={check}>
          <FormControl isInvalid={isError} my="10px">
            <InputGroup>
              <InputLeftAddon
                color={bg}
                bg={color}
                fontSize="lg"
                fontWeight="bold"
                borderColor={color}
                children="$"
              />
              <Input
                type="number"
                onChange={updateInput}
                border="2px"
                fontWeight="bold"
                borderColor={color}
                color={color}
                _hover={{ color: { color } }}
              />
            </InputGroup>
            {!isError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Input Can't Be Empty.</FormErrorMessage>
            )}
            <Button
              my="7px"
              type="submit"
              bgGradient="linear(to-l, #5F0F40, #310E68)"
              bg="#3F4E4F"
              _hover={{ color: { color }, filter: "auto", brightness: "150%" }}
            >
              {" "}
              Add{" "}
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Total total={total} data={data} />
    </Flex>
  );
}
