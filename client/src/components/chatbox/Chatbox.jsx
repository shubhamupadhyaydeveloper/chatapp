import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Chats from './Chats';
import Input from './Input';
import WelcomePage from './Welcomepage';
import useConversation from '../../../zustand/conversation';

const Chatbox = () => {
    const { conversation ,setConversation } = useConversation()

    // this is for remove previous user when you signup or login
    useEffect(() => {
       setConversation(null)
    },[])
  
    return (
        <>
            {conversation ? (

                <Flex flexDirection={"column"} ml={3}>
                    <Navbar />
                    <Chats />
                    <Input />
                </Flex>

            ) : <WelcomePage />}

        </>
    )
}

export default Chatbox;
