import { useState } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { FaPaperPlane, FaImage, FaSmile } from 'react-icons/fa';
import { useSendMessageMutation } from '../../api/sendmessage';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const {mutateAsync,isPending} = useSendMessageMutation()

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if(message.length > 0) {
        const request = await mutateAsync(message)
      }
      setMessage('');
    } catch (error) {
      console.log('Error in send messagge',error)
    }
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
        isLoading={isPending}
        aria-label="Send Message"
        colorScheme="blue"
        onClick={handleSubmit}
      />
    </Flex>
  );
};

export default ChatInput;