import { Box, Flex, Input, useStatStyles } from '@chakra-ui/react';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [input ,setInput] = useState('')
  const handleFormSubmit = async () => {
    if(input.length > 0) {
      console.log(input)
    }
    setInput('')
  }
  return (
    <Flex alignItems={"center"} gap={2} maxW={["300px", "30px", "270px"]}>
      <Input placeholder='search names' border={"none"} bg={"black"} rounded={"3xl"} color={"white"} value={input} onChange={(e) => setInput(e.target.value)}/>
      <Box as='button'  bg={"white"} px={"6px"} py={"5px"} rounded={"30px"} onClick={handleFormSubmit} >
        <IoSearch size={"1.6rem"} color='black'/>
      </Box>
    </Flex>
  )
}

export default Search;