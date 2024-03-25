import { Box } from '@chakra-ui/react';
import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import logoutApi from '../../api/logout';
import { setUser } from '../../../store/reducer';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        await logoutApi()
        localStorage.removeItem('user')
        dispatch(setUser(null))
    }
    return (
        <Box as='button' mb={"1rem"} >
            <RiLogoutCircleLine size={"1.7rem"} color='white' onClick={handleLogout} />
        </Box>
    )
}

export default Logout;
