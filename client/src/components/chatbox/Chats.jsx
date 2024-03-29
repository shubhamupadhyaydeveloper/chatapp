import React from 'react'
import Chat from './Chat';
import { Flex } from '@chakra-ui/react';
import "../../index.css"
import { getMessages } from '../../api/getmessage';
import useConversation from '../../../zustand/conversation';

const Chats = () => {
  // api  call
  getMessages()

  const { message } = useConversation()
  return (
    <Flex flexDirection={"column"} overflowY={"auto"} height={["660px", "650px", "500px"]} mb={["1vh"]}>
      {message?.messages?.map((chatDetail) => (
        <Chat key={chatDetail?._id} chatDetail={chatDetail} />
      ))}

    </Flex>
  )
}

export default Chats;
