import React from 'react'
import Chat from './Chat';
import { Flex } from '@chakra-ui/react';
import "../../index.css"

const Chats = () => {
  return (
    <Flex flexDirection={"column"}  overflowY={"auto"} height={["660px","650px","500px"]} mb={["1vh"]}>
      <Chat />
      <Chat />
    </Flex>
  )
}

export default Chats;
