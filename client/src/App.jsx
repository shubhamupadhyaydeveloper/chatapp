import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Login from "./pages/login";
import SignupCard from './pages/Signup';
import { Box } from '@chakra-ui/react';
import Home from './pages/home';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user.isUser)

  return (
    <Box minH={"100vh"} className='body'>
       <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to='/login' />  } />
        <Route path='/signup' element={user ? <Navigate to='/'/> : <SignupCard />} />
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login />} />
       </Routes>
    </Box>
  )
}

export default App;
