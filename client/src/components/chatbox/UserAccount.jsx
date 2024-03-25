import { Avatar } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';

const UserAccount = () => {
  const user = useSelector(state => state.user.isUser)
  if(!user) {
    return null
  }
  return (
    <>
     <Avatar src={`${user?.profilePic}`} size={"sm"} cursor={'pointer'}/>
    </>
  )
}

export default UserAccount;
