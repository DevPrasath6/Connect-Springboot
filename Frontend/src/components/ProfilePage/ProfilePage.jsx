import React from 'react'
import {Container,Flex } from '@chakra-ui/react'
import ProfileHeader from '../Profile/ProfileHeader'
import ProfileTab from '../Profile/ProfileTab'
import ProfilePosts from '../Profile/ProfilePosts'

function ProfilePage() {
  return (
    <Container maxW='container.lg' py={8}>
      <Flex py={8} px={4} pl={{base:4,md:10}} w={'full'} mx={'auto'} flexDirection={'column'} border={'1px solid'} borderColor={'whiteAlpha.200'} borderRadius={'3xl'} bg={'whiteAlpha.50'} backdropFilter={'blur(16px)'} boxShadow={'xl'}>
        <ProfileHeader/>
      </Flex>
      <Flex px={{base:2 , sm:4}} py={4} maxW={'full'} mx={'auto'} borderTop={'1px solid'} borderColor={'whiteAlpha.200'} direction={'column'}>
        <ProfileTab/>
        <ProfilePosts/>
      </Flex>
    </Container>
  )
}

export default ProfilePage
