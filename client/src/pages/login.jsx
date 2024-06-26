import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { loginApi } from '../api/login'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/reducer'
import useShowToast from '../hooks/ShowToast'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const {handleSubmit,register,formState:error,reset} = useForm()
    const dispatch = useDispatch();
    const showToast = useShowToast()
    const handleFormSubmit =  async (data) => {
       try {
         const formdata = {
            fullname : data.fullname,
            password : data.password
         }
        const response =  await loginApi(formdata)
        if(response.error){
            showToast(response.error,'error')
         }else{
             showToast('Signup successfull','success')
             localStorage.setItem("user", JSON.stringify(response))
             dispatch(setUser(response))
         }
        reset()
       } catch (error) {
         console.log("Error login.jsx",error)
       }
    }

    return (
        <Flex
        >
            <Stack mx={'auto'} maxW={'lg'} py={12} px={6}
               mt={["20vw","20vw","9.5vw","7vw","5.5vw"]}
            >
                <Box
                    rounded={'lg'}
                    bg="rgba(255, 255, 255, 0.2)"
                    backdropFilter="blur(8px)"
                    boxShadow={'lg'}
                    w={['300px',"300px","300px","300px","350px"]}
                    p={8}>
                    <Text fontSize={"3xl"} fontWeight={"bold"} mx={"auto"} mb={3}>Login</Text>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" width={["230px","230px","230px","280px"]} 
                                     {...register('fullname', {required : "fullname is reqired"})}/>
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} 
                                 {...register('password',{required : "Password is required"})}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                type='submit'
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Login
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link href='/signup' color={'red.400'} fontWeight={"semibold"}>Signup</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}