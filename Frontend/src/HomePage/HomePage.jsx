import React from 'react'
import{Box, Container, Flex} from '@chakra-ui/react'
import FeedPsots from '../components/FeedPosts/FeedPsots'
import SuggestionPosts from '../components/SuggestionFeed/SuggestionPosts'

function HomePage() {
  return (
    <Container maxW={"7xl"} px={{base:3, md:6}} py={6}>
        <Flex gap={{base:6, xl:12}} alignItems={'flex-start'}>
            <Box flex={1} minW={0} maxW={'720px'} mx={'auto'}>
              <FeedPsots/>
            </Box>
            <Box flex={'0 0 320px'} position={'sticky'} top={6} display={{base:"none", xl:"block"}}>
            <SuggestionPosts/>
            </Box>
        </Flex>
    </Container>
  )
}

export default HomePage
