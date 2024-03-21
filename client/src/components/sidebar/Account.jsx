import { Avatar, AvatarBadge, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const Account = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={'center'} mb={5} width={["300px","300px","250px"]}  _hover={{
            backgroundColor: "blue.500",
            borderRadius: "md",
            
        }}
        px={3} py={2}
        as={"button"}
        >
            <Flex gap={3} alignItems={"center"}>
                <Avatar size={'md'} src='https://bit.ly/dan-abramov'>
                    <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Flex flexDirection={"column"} gap={2}>
                    <Text fontWeight={"semibold"} mb={"-0.7rem"} color={'white'} fontSize={"md"}>John Doi</Text>
                    <Text color={'black'} >message</Text>
                </Flex>
            </Flex>
            <Text color={'black'}>1:30pm</Text>
        </Flex>
    )
}

export default Account;
