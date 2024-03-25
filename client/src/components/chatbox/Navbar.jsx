import React from 'react'
import UserAccount from './UserAccount';
import { Box, Flex, Text } from '@chakra-ui/react';
import useConversation from '../../../zustand/conversation';


const Navbar = () => {
  const {conversation} = useConversation()
  if(!conversation)  {
    return null
  }
  return (
      <Flex alignItems="center" justifyContent="space-between" height={"50px"} mt={"0.2rem"}>
        <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
        <Text fontWeight={'medium'} fontSize={"xl"} color={"black"}>To:</Text>
        <Text fontWeight={'semibold'} fontSize={"2xl"} color={"white"}>{conversation?.fullname}</Text>
        </Flex>
        <Flex alignItems={"center"} gap={3}>
        <Text fontWeight={'medium'} fontSize={"xl"} color={"white"} >You</Text>
        <UserAccount />
        </Flex>
      </Flex>
  )
}

export default Navbar;
