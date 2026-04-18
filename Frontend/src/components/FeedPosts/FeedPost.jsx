import React, { useEffect, useState } from 'react'
import { Box, Image, Container } from '@chakra-ui/react'
import FeedHeader from './FeedHeader'
import FeedFooter from './FeedFooter'


function FeedPost({img,username,avatar}) {
  const[isLoading,setLoading] = useState(true);
    useEffect(()=>
    {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    },[])

  return (
    <Container
      maxW={"container.md"}
      px={0}
      py={0}
      border={'1px solid'}
      borderColor={'whiteAlpha.200'}
      borderRadius={'3xl'}
      bg={'whiteAlpha.50'}
      backdropFilter={'blur(16px)'}
      overflow={'hidden'}
      boxShadow={'0 20px 60px rgba(0,0,0,0.35)'}
    >
      <Box p={4} pb={0}>
        <FeedHeader username={username}  avatar={avatar}/>
      </Box>
       <Box overflow={'hidden'}>
        <Image src={img} w={'full'} maxH={'560px'} objectFit={'cover'} />
      </Box>
      <Box p={4}>
        <FeedFooter/>
      </Box>
    </Container>

  )
}

export default FeedPost
