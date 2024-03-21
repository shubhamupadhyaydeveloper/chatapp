import React from 'react'
import UserAccount from './UserAccount';
import { Box, Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
      <Flex alignItems="center" justifyContent="space-between" height={"50px"} mt={"0.2rem"}>
        <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
        <Text fontWeight={'medium'} fontSize={"xl"} color={"black"}>To:</Text>
        <Text fontWeight={'semibold'} fontSize={"2xl"} color={"white"}>Developer</Text>
        </Flex>
        <UserAccount />
      </Flex>
  )
}

export default Navbar;
