import { Avatar, AvatarBadge, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import useConversation from '../../../zustand/conversation';

const Account = ({userDetail}) => {
    if(!userDetail) {
        return null;
    }
    const {conversation,setConversation,onlineUser,message} = useConversation();
    const isSelected =  conversation?._id === userDetail?._id
    const isOnline = onlineUser?.includes(userDetail?._id)

    console.log(message)
    
    return (
        <Flex justifyContent={"space-between"} alignItems={'center'} mb={5} width={["300px","300px","270px"]}  _hover={{
            backgroundColor: "blue.500",
            borderRadius: "md",
        }}
        backgroundColor={`${isSelected ? 'blue.500' : null}`}
        rounded={'md'}
        px={3} py={2}
        as={"button"}
        onClick={()  => setConversation(userDetail)}
        >
            <Flex gap={3} alignItems={"center"}>
                <Avatar size={'md'} src={`${userDetail?.profilePic}`}>

                 { isOnline  &&  <AvatarBadge boxSize='1em' bg='green.500' />}
                
                </Avatar>
                <Flex flexDirection={"column"} gap={2}>
                    <Text fontWeight={"semibold"} mb={"-0.7rem"} color={'white'} fontSize={"md"}>{userDetail?.fullname}</Text>
                    <Text color={'black'} >{(message?.lastMessage?.text?.slice(0, 10) ?? '') + '...'}</Text>
                </Flex>
            </Flex>
            <Text color={'black'}>1:30pm</Text>
        </Flex>
    )
}

export default Account;
