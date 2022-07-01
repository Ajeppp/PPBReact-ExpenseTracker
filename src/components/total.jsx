import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdHistory } from "react-icons/md";

export default function Total(props) {
  const logo = useColorModeValue("black", "white");
  const bg = useColorModeValue("darkGray", "black");
  const color = useColorModeValue("whiteAlpha.800", "black");
  return (
    <Flex
      className="BungkusTotal"
      gap="20px"
      flexDir={{ base: "column", md: "row", lg: "row" }}
    >
      <Flex
        className="BungkusTotalExpense"
        border="4px"
        borderRadius="13px"
        borderColor={color}
        width="auto"
        height="80px"
        gap="20px"
      >
        <Box
          display="flex"
          flexDir="column"
          width="110px"
          justifyContent="center"
          marginLeft="20px"
        >
          <Text textAlign="left" color={color} fontSize="large">
            Expense
          </Text>
          <Text
            textAlign="left"
            color="#F15412"
            fontWeight="bold"
            fontSize="large"
          >
            ${props.total.Expense}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Popover isLazy>
            <PopoverTrigger>
              <Button
                marginRight="15px"
                bg={bg}
                fontSize="xl"
                color={logo}
                _hover={{ bg: "#3F4E4F" }}
              >
                <MdHistory />
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="#374045" textAlign="left">
              <PopoverHeader fontWeight="semibold" color="#FFFFFF" mx="15px">
                Expense
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody bg="#374045">
                {props.data.Expense.map((history) => (
                  <Heading size="sm" mx="15px" color="#F15412" textAlign="left">
                    ${history}
                  </Heading>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
      <Flex
        className="BungkusTotalExpense"
        border="4px"
        borderRadius="13px"
        borderColor={color}
        width="auto"
        height="80px"
        gap="20px"
      >
        <Box
          display="flex"
          flexDir="column"
          width="110px"
          justifyContent="center"
          marginLeft="20px"
        >
          <Text textAlign="left" color={color} fontSize="large">
            Income{" "}
          </Text>
          <Text
            textAlign="left"
            color="#3EC70B"
            fontWeight="bold"
            fontSize="large"
          >
            ${props.total.Income}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Popover isLazy>
            <PopoverTrigger>
              <Button
                marginRight="15px"
                bg={bg}
                fontSize="xl"
                color={logo}
                _hover={{ bg: "#3F4E4F" }}
              >
                <MdHistory />
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="#374045" textAlign="left">
              <PopoverHeader fontWeight="semibold" color="#FFFFFF" mx="15px">
                Income
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody bg="#374045">
                {props.data.Income.map((history) => (
                  <Heading size="sm" mx="15px" color="#3EC70B" textAlign="left">
                    ${history}
                  </Heading>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
    </Flex>
  );
}
