import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar';
import Chatbox from '../components/chatbox/Chatbox';

const Home = () => {
    return (
        <div>
            <Container
                mx={"auto"}
                bg="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(8px)"
                rounded={["", "", "", "2xl"]}
                minW={"800px"}
            >
                <Flex mt={["", "", "10vh", "10vh", "10vh", "15vh"]}>
                    <Box flex={1} borderRight={{ base: "none", md: "1px solid rgba(255, 255, 255, 0.2)" }}>
                        <Sidebar />
                    </Box>
                    <Box flex={3} display={["none", "none", "block"]} overflow={"hidden"}>
                        <Chatbox />
                    </Box>
                </Flex>

            </Container>
        </div>
    )
}

export default Home;
