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
        return await request.json()
      } catch (error) {
        console.log('Error in getUsersApi', error.message)
      }
    }
  })


  return (
    <Flex flexDirection={"column"} mt={5} minW={"300px"} overflowY={"hidden"}>
      <Search />
      {isLoading && (
        <Flex width={"250px"} justifyContent={'center'} alignItems={'center'} mt={3}>
          <Spinner size='md' />
        </Flex>
      )}
      <Accounts users={data} />
      <Logout />
    </Flex>
  )
}

export default Sidebar;
