import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <Flex alignItems={"center"} gap={2} maxW={["300px","30px","250px"]}>
      <Input placeholder='search names' border={"none"} bg={"black"} rounded={"3xl"} color={"white"}/>
       <Box as='button' bg={"white"} px={"6px"} py={"5px"} rounded={"30px"} _hover={{
         backgroundColor :"skyblue",
         transition : "0.25s"
       }} >
        <IoSearch size={"1.6rem"}/>
        </Box>
    </Flex>
  )
}

export default Search;
