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

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

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
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" width={["230px","230px","230px","280px"]}/>
                                </FormControl>
                            </Box>
                        </HStack>
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
                                Login
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link href='/signup' color={'red.400'} fontWeight={"semibold"}>Signup</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}