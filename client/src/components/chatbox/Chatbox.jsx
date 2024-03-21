import { Flex } from '@chakra-ui/react';
import React from 'react'
import Navbar from './Navbar';
import Chats from './Chats';
import Input from './Input';
import WelcomePage from './Welcomepage';

const Chatbox = () => {
    const noChatselected = true
    return (
        <>
            {noChatselected ? <WelcomePage /> : (

                <Flex flexDirection={"column"} ml={3}>
                    <Navbar />
                    <Chats />
                    <Input />
                </Flex>

            )}

        </>
    )
}

export default Chatbox;
