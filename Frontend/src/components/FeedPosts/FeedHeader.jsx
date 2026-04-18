import React from 'react'
import { Avatar,Box,Flex, Text, Badge } from '@chakra-ui/react'

function FeedHeader({username,avatar}) {
  return (
    <Flex mb={3} justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'}  gap={2}>
            <Avatar src={avatar} size={'sm'}/>
                        <Flex direction={'column'}>
                            <Flex fontSize={14} fontWeight={"bold"} gap={2} alignItems={'center'}>
                {username}
                                <Badge colorScheme='orange' variant='subtle' borderRadius='full'>Live</Badge>
                            </Flex>
                            <Text fontSize={12} color={'whiteAlpha.700'}>Shared a new post</Text>
                        </Flex>
        </Flex>
        <Box cursor={"pointer"}>
            <Text
            fontSize={12}
                        color={"orange.300"}
            fontWeight={'bold'}
            _hover={{
                color:'white',
            }}
            transition={'0.2s ease-in-out'}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}

export default FeedHeader
