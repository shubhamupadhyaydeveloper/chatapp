import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import { IoCheckmarkDone } from "react-icons/io5";

const ChatMessage = () => {

    const isSeen = false
    return (
        <Flex alignItems="center" mb={2} mt={2}>
            <Avatar size="sm" src="https://bit.ly/dan-abramov" />
            <Box
                backgroundColor="gray.200"
                color="black"
                borderRadius={'lg'} 
                px={3}
                py={2}
                ml={3}
                position="relative" 
            >
                <Text>hello developer</Text>
                <Flex alignItems={"center"} gap={1}>{isSeen ? <IoCheckmarkDone size={"1.3rem"} color={isSeen && 'skyblue'} /> : <IoCheckmarkDone />} <Text fontSize={"xs"}>1:30</Text></Flex>
            </Box>

        </Flex>
    );
};

export default ChatMessage;
