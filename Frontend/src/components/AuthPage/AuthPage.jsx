import React from 'react'
import {Box, Container, Flex,Image, VStack, Heading, Text} from '@chakra-ui/react'
import AuthForm from '../AuthForm/AuthForm';

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={{base:4, md:8}} py={10}>
        <Container maxW={"7xl"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={{base:10, xl:16}} direction={{base:'column', xl:'row'}}>

            <Box display={{base:"none", xl:"block"}} flex={1}>
                <Image src='/auth.png' maxH={650} w={'full'} objectFit={'contain'} alt='Connect preview' filter={'drop-shadow(0 32px 60px rgba(0,0,0,0.45))'} />
                <VStack alignItems={'start'} mt={6} spacing={2}>
                  <Heading size='xl'>Connect</Heading>
                  <Text color={'whiteAlpha.800'} maxW={'480px'}>
                    Share moments, keep up with people you follow, and stay connected in one place.
                  </Text>
                </VStack>
            </Box>

            <VStack spacing={4} align={'stretch'} flex={1} w={'full'} maxW={'420px'}>
                <AuthForm/>
            </VStack>
        </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
