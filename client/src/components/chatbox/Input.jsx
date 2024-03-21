import { useState } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { FaPaperPlane, FaImage, FaSmile } from 'react-icons/fa';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Message sent:", message);
    setMessage('');
  };

  return (
    <Flex align="center" px={4} py={2} borderTop="1px solid #ccc">
      <IconButton
        icon={<FaImage />}
        aria-label="Send Image"
        mr={2}
        colorScheme="blue"
        onClick={() => console.log("Send Image")}
      />
      <Input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type a message..."
        flex="1"
        color={"white"}
        mr={2}
        variant="filled"
        borderRadius="full"
      />
      <IconButton
        icon={<FaPaperPlane />}
        aria-label="Send Message"
        colorScheme="blue"
        onClick={handleSubmit}
      />
    </Flex>
  );
};

export default ChatInput;