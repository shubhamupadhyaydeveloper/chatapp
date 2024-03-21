import { Box, Text, Button, Flex, } from '@chakra-ui/react';
import { PiWechatLogoDuotone } from "react-icons/pi";
import "../../index.css"

const WelcomePage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height={["660px","650px","500px"]}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} color={"white"}>
        Welcome to <span className='wave'>👋</span> Chat app 
      </Text>
      <Text fontSize="lg" mb={4} color={"white"}>
        Select a chat to start a message
      </Text>
      <Box fontSize="4xl" mb={4}>
        <PiWechatLogoDuotone  color='white'/>
      </Box>
    </Flex>
  );
};

export default WelcomePage;
