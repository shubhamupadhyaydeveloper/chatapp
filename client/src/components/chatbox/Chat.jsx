import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import { IoCheckmarkDone } from "react-icons/io5";
import { useSelector } from 'react-redux';
import useConversation from '../../../zustand/conversation';
import {format} from 'date-fns'

const ChatMessage = ({chatDetail}) => {
    if(!chatDetail) {
        return null
    }

    const currentUser = useSelector(state => state.user.isUser)
    const isCurrentUser = currentUser?.id ===  chatDetail?.senderId
    const {conversation} = useConversation()
    const isSeen = false
    return (
        <Flex alignItems="center" mb={2} mt={2} mr={3}  justifyContent={isCurrentUser ? "flex-end" : "flex-start"}>
            <Avatar size="sm" src={isCurrentUser ? `${currentUser?.profilePic}` : `${conversation?.profilePic}`} />
            <Box
                backgroundColor={isCurrentUser ? 'green.200' : 'gray.500'}
                color="black"
                borderRadius={'lg'} 
                px={3}
                py={.5}
                ml={3}
                position="relative" 
            >
                <Text>{chatDetail?.text}</Text>
                <Flex alignItems={"center"} gap={1}>{isSeen ? <IoCheckmarkDone size={"1.3rem"} color={isSeen && 'darkred'} /> : <IoCheckmarkDone />} <Text fontSize={"xs"}>{format(new Date(chatDetail?.createdAt), 'HH:mm')}</Text></Flex>
            </Box>

        </Flex>
    );
};

export default ChatMessage;
