import { Flex,Avatar,Text, Box, Link,Button} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'


function SuggestionHeader() {
  return (
    <>
      <Flex justifyContent={'space-between'} alignItems={'center'} mt={5} mb={4} p={4} border={'1px solid'} borderColor={'whiteAlpha.200'} borderRadius={'2xl'} bg={'whiteAlpha.50'} backdropFilter={'blur(16px)'}>
            <Avatar src='/profilepic.png' size={'sm'}/>

        <Flex direction={'column'} fontSize={15} fontWeight={"bold"} gap={1} px={3}>
           Aditya
           <Text fontSize={'xs'} color={'whiteAlpha.700'} fontWeight={'normal'}>
          Recommended for you
           </Text>
            </Flex>
        <Flex>
            <Link to = {'/login'} as={RouterLink} display={'block'} cursor={'pointer'}>
          <Button colorScheme='orange' variant='outline' size={'sm'} borderRadius={'xl'} >
                    Log Out
                </Button>
            </Link>
            </Flex>
        </Flex>
    </>
  )
}

export default SuggestionHeader
