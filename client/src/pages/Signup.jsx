import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Text,
    Link,
    RadioGroup,
    Radio,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducer';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import useShowToast from '../hooks/ShowToast'
import useSignUpApi from '../api/signup';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const showToast = useShowToast()
    const [value, setValue] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const handleFromSubmit = async (data) => {
        const userData = {
            fullname : data.fullname,
            profilename : data.profilename,
            password : data.password,
            email  : data.email,
            gender : value
        }
        const response = await useSignUpApi(userData)
        if(response.error){
           showToast(response.error,'error')
        }else{
            showToast('Signup successfull','success')
            localStorage.setItem("user", JSON.stringify(response))
            dispatch(setUser(response))
        }
        reset()
    }
    return (
        <Stack mx={'auto'} maxW={'lg'} py={12} px={6}
            mt={["20vw", "20vw", "9.5vw", "7vw", "5.5vw"]}
        >
            <Box
                rounded={'lg'}
                bg="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(8px)"
                boxShadow={'lg'}
                p={8}>
                <Text fontSize={"3xl"} fontWeight={"bold"} mx={"auto"} mb={3}>Sign Up</Text>
                <Stack spacing={4}>
                    <form onSubmit={handleSubmit(handleFromSubmit)} >
                        <Flex
                            gap={3}
                            flexDirection={["column", "column", "row", "row", "row"]}
                        >
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel color={"white"}>FullName</FormLabel>
                                    <Input type="text"
                                        {...register("fullname", { required: "fullname is required" })}
                                    />
                                    {errors.text && <Text color={"red"} fontWeight="semibold" fontSize="sm">{errors.text.message}</Text>}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel color={"white"}>ProfileName</FormLabel>
                                    <Input type="text"
                                        {...register("profilename", { required: "Profile name is reqired" })}
                                    />
                                </FormControl>
                            </Box>
                        </Flex>
                        <FormControl id="email" isRequired mt={3}>
                            <FormLabel color={"white"}>Email address</FormLabel>
                            <Input type="email"
                                {...register("email", { required: "Email is required" })}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired mt={3}>
                            <FormLabel color={"white"}>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'}
                                    {...register("password", { required: "Password is required" })}
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

                        <RadioGroup onChange={setValue} value={value} mt={4} color={"white"}>
                            <Stack direction='row'>
                                <Radio value='male'>male</Radio>
                                <Radio value='female'>female</Radio>
                            </Stack>
                        </RadioGroup>

                        <Stack spacing={10} pt={2} mt={3}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                type='submit'
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                    </form>
                    <Stack pt={6}>
                        <Text align={'center'}>
                            Already a user? <Link href='/login' fontWeight={'semibold'} color={'red.400'}>Login</Link>
                        </Text>
                    </Stack>

                </Stack>
            </Box>
        </Stack>

    )
}