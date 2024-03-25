import { Avatar, AvatarBadge, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import useConversation from '../../../zustand/conversation';

const Account = ({userDetail}) => {
    if(!userDetail) {
        return null;
    }
    const {conversation,setConversation} = useConversation();
    const isSelected =  conversation?._id === userDetail?._id
    
    return (
        <Flex justifyContent={"space-between"} alignItems={'center'} mb={5} width={["300px","300px","270px"]}  _hover={{
            backgroundColor: "blue.500",
            borderRadius: "md",
        }}
        backgroundColor={`${isSelected ? 'blue.500' : null}`}
        px={3} py={2}
        as={"button"}
        onClick={()  => setConversation(userDetail)}
        >
            <Flex gap={3} alignItems={"center"}>
                <Avatar size={'md'} src={`${userDetail?.profilePic}`}>
                    <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <Flex flexDirection={"column"} gap={2}>
                    <Text fontWeight={"semibold"} mb={"-0.7rem"} color={'white'} fontSize={"md"}>{userDetail?.fullname}</Text>
                    <Text color={'black'} >message</Text>
                </Flex>
            </Flex>
            <Text color={'black'}>1:30pm</Text>
        </Flex>
    )
}

export default Account;
