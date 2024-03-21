import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/login";
import SignupCard from './pages/Signup';
import { Box } from '@chakra-ui/react';
import Home from './pages/home';

const App = () => {
  return (
    <Box minH={"100vh"} className='body'>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignupCard />} />
        <Route path='/login' element={<Login />} />
       </Routes>
    </Box>
  )
}

export default App;
