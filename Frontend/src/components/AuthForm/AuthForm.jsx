import React, { useState } from 'react'
import {Box, VStack, Button, Flex, Text, Stack, Heading} from '@chakra-ui/react'
import Signup from './Signup'
import Login from './Login'
import GoogleAuth from './GoogleAuth'
function AuthForm() {
  const[isLogin,setIsLogin] =useState(true)

  return (
    <Stack direction={'column'} gap={3} alignItems={'center'} justifyContent={'center'}>
      <Box border={"1px solid"} borderColor={'whiteAlpha.200'} borderRadius={'3xl'} padding={6} width={'full'} bg={'whiteAlpha.50'} backdropFilter={'blur(20px)'} boxShadow={'xl'}>
        <VStack spacing={4}>
        <Box px={4} py={2} borderRadius={'2xl'} bg={'whiteAlpha.100'} border={'1px solid'} borderColor={'whiteAlpha.200'}>
          <Heading size='lg' letterSpacing={'0.12em'} textTransform={'uppercase'}>
            Connect
          </Heading>
        </Box>

      {isLogin ? <Login/>: <Signup onSuccess={() => setIsLogin(true)} />}
        <Flex alignItems={'center'} justifyContent={'center'} gap={1} w={"full"} my={2}>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
          <Text mx={1} color={'whiteAlpha.800'} fontSize={'sm'}>OR</Text>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
        </Flex>
       <GoogleAuth/>
        </VStack>
      </Box>
      <Box border={'1px solid'} borderColor={'whiteAlpha.200'} borderRadius={'3xl'} padding={5} width={'full'} bg={'blackAlpha.400'} backdropFilter={'blur(14px)'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14} color={'whiteAlpha.800'}>
            {isLogin? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={()=>setIsLogin(!isLogin)} color={'orange.300'} cursor={'pointer'}>
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </Stack>
  )
}

export default AuthForm
