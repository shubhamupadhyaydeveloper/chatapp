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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)

    return (
            <Stack mx={'auto'} maxW={'lg'} py={12} px={6}
            mt={["20vw","20vw","9.5vw","7vw","5.5vw"]}
            >
                <Box
                    rounded={'lg'}
                    bg="rgba(255, 255, 255, 0.2)"
                    backdropFilter="blur(8px)"
                    boxShadow={'lg'}
                    p={8}>
                    <Text fontSize={"3xl"} fontWeight={"bold"} mx={"auto"} mb={3}>Sign Up</Text>
                    <Stack spacing={4}>
                            <Flex
                            gap={3}
                            flexDirection={["column", "column", "row", "row", "row"]}
                            >
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            </Flex>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
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
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
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