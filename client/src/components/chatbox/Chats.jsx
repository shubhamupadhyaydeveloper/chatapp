import React, { useEffect, useRef } from 'react'
import Chat from './Chat';
import { Flex, Spinner, Text, useEditable } from '@chakra-ui/react';
import "../../index.css"
import { getMessages } from '../../api/getmessage';
import useConversation from '../../../zustand/conversation';
import getRealTimeMessage from '../../socket/realtimesocket';

const Chats = () => {
  // api  call
  const {isLoading} = getMessages()
  getRealTimeMessage()
  const { message } = useConversation()
  const lastMessageRef = useRef()

  useEffect(() => {
   setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
   }, 100);
  },[message])

  if(isLoading) {
    return (
      <Flex width={"450px"} justifyContent={'center'} alignItems={'center'} mt={5} mb={10}>
        <Spinner size='md' />
      </Flex>
    )
  }
  
  if(message?.length === 0)  {
     return  (
      <Flex alignItems={'center'} justifyContent={"center"} mb={"28rem"} mt={"2rem"}>
        <Text fontWeight={"xl"} color={"white"}>Send a message to start Conversation</Text>
      </Flex>
     )
  }
  
  return (
   <>
    <Flex flexDirection={"column"} overflowY={"auto"} height={["660px", "650px", "500px"]} mb={["1vh"]}>
      {message?.map((chatDetail) => (
         <div key={chatDetail?._id} ref={lastMessageRef}>
           <Chat chatDetail={chatDetail} />
         </div>
      ))}

    </Flex>
   </>
  )
}

export default Chats;
