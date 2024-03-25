import React from 'react'
import Account from './Account';
import { Flex } from '@chakra-ui/react';
import "../../index.css"
import { PiCloudFogLight } from 'react-icons/pi';

const Accounts = ({ users }) => {
  if (!users) {
    return null;
  }
  return (
    <Flex flexDirection={"column"} overflowY={"auto"} height={["660px", "650px", "500px"]} mb={["1vh"]} mt={5}>
      {users.map((user) => (
        <Account key={user?._id} userDetail={user}/>
      ))}
    </Flex>
  )
}

export default Accounts;
