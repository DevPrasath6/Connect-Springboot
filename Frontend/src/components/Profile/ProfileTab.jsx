import { Flex, Text, Box } from '@chakra-ui/react'
import {BsGrid3X3,BsBookmark,BsSuitHeart} from 'react-icons/bs'
import React from 'react'

function ProfileTab() {
  return (
    <Flex w={'full'} justifyContent={'center'} gap={{base:6, md:10}} textTransform={'uppercase'} fontWeight={'bold'} mt={2} mb={4}>
      <Flex alignItems={'center'} gap={1} cursor={'pointer'} px={3} py={2} borderRadius={'xl'} bg={'whiteAlpha.50'}>
        <Box fontSize={20}>
          <BsGrid3X3/>
        </Box>
        <Text fontSize={12} display={'block'}>
          Posts
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={1} cursor={'pointer'} px={3} py={2} borderRadius={'xl'}>
        <Box fontSize={20}>
           <BsBookmark/>
        </Box>
        <Text fontSize={12} display={'block'}>
          Saved
        </Text>
      </Flex>
      <Flex  alignItems={'center'} gap={1} cursor={'pointer'} px={3} py={2} borderRadius={'xl'}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={'bold'}/>
        </Box>
        <Text fontSize={12} display={'block'}>
          Likes
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTab
