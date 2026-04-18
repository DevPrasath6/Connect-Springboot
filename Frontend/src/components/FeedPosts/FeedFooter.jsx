import { Box, Button, Flex,Input,InputGroup,InputRightElement,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo,UnlikeLogo } from '../../assests/logos';

function FeedFooter() {
  const[liked,setLiked] = useState(false);
  const[likes,setLikes] =useState(0);

  const handleLike =()=>
  {
    if(liked)
    {
      setLiked(false);
      setLikes(likes-1);
    }
    else
    {
      setLiked(true);
      setLikes(likes+1);
    }
  }
  return (
    <Box>
    <Flex alignItems={'center'} gap={4} mt={1}>
      <Box onClick={handleLike} cursor={'pointer'} fontSize={8}>
        {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
      </Box>
      <Box cursor={'pointer'} fontSize={18}>
        <CommentLogo/>
      </Box>
    </Flex>
    <Text fontSize={'sm'} fontWeight={700} mt={3}>
      {likes} likes
    </Text>
    <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'} mt={3}>
      <InputGroup>
        <Input variant={'flushed'} placeholder ={"Add a comment..."} fontSize={14} borderColor={'whiteAlpha.300'} />
        <InputRightElement>
          <Button
            fontSize={14}
            color={'orange.300'}
            fontWeight={600}
            cursor={'pointer'}
            _hover={{color:'white'}}
            bg={"transparent"}
            type='button'
            >
              Post
            </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>

    </Box>
  )
}

export default FeedFooter
