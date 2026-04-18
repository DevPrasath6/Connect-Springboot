import { Avatar, Flex,Text,Box,Link} from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

export default function SuggestionPost({avatar,username}) {
  return (

      <Flex  alignItems={'center'} gap={4} mb={4} p={3} border={'1px solid'} borderColor={'whiteAlpha.100'} borderRadius={'xl'} bg={'whiteAlpha.30'}>
        <Avatar src={avatar} size={'sm'}/>
        <Text fontWeight={600}>
            {username}
        </Text>

        <Box ml={'auto'}>
          <Text fontSize={15} fontWeight={'bold'} color={'orange.300'}>
            <Link to={'/'} as={RouterLink}>
              Follow
            </Link>
          </Text>
        </Box>
      </Flex>

  )
}
