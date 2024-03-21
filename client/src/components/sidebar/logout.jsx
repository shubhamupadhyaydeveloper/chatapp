import { Box } from '@chakra-ui/react';
import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
    return (
        <Box as='button' mb={"1rem"}>
            <RiLogoutCircleLine size={"1.7rem"} color='white'/>
        </Box>
    )
}

export default Logout;
