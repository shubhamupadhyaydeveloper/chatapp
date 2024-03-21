import React from 'react'
import Search from './Search';
import Accounts from './Accounts';
import Logout from './logout';
import { Flex } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Flex flexDirection={"column"} mt={5} minW={"300px"} overflowY={"hidden"}>
       <Search />
       <Accounts />
       <Logout />
    </Flex>
  )
}

export default Sidebar;
