import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import History from './components/history';


function App() {
  return (
    <Flex className="App" h='100vh' textAlign='center' flexDir='column' alignItems='center' justifyContent='center' textColor='#EEEEEE'>
      <Header />
      <Flex gap='60px' my='50px' flexDir={{ base: 'column', lg: 'row' }} >
        <Body />
        <History />
      </Flex>
    </Flex>
  );
}

export default App;
