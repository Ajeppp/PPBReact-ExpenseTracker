import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';


function App() {
  return (
    <Flex className="App" h='100vh' textAlign='center' flexDir='column' alignItems='center' justifyContent='center' textColor='#EEEEEE'>
      <Header />
      <Body />
    </Flex>
  );
}

export default App;
