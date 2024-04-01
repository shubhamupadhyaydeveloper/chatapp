import React from 'react'
import Search from './Search';
import Accounts from './Accounts';
import Logout from './logout';
import { Flex, Spinner } from '@chakra-ui/react';
import { useQuery } from "@tanstack/react-query"

const Sidebar = () => {
  //api
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getUsers'],
    queryFn: async () => {
      try {
        const request = await fetch('/api/user', {
          method: 'GET'
        })
        const response = await request.json()
        return response
      } catch (error) {
        console.log('Error in getUsersApi', error.message)
      }
    }
  })

  if(!data) {
    return null
  }

  return (
    <Flex flexDirection={"column"} mt={5} minW={"300px"} overflowY={"hidden"}>
      <Search />
      {isLoading && (
        <Flex width={"250px"} justifyContent={'center'} alignItems={'center'} mt={3} mb={"15rem"}>
          <Spinner size='md' />
        </Flex>
      )}
      <Accounts users={data} />
      <Logout />
    </Flex>
  )
}

export default Sidebar;
