import React from 'react'
import Account from './Account';
import { Flex } from '@chakra-ui/react';
import "../../index.css"

const Accounts = () => {
  return (
    <Flex flexDirection={"column"}  overflowY={"auto"} height={["660px","650px","500px"]} mb={["1vh"]} mt={5}>
      <Account />
      <Account />
    </Flex>
  )
}

export default Accounts;
