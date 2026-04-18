import React from 'react'
import { VStack } from '@chakra-ui/react'
import SuggestionHeader from './SuggestionHeader'
import SuggestionPost from './SuggestionPost'

function SuggestionPosts() {
  return (
    <VStack alignItems={'stretch'} spacing={0}>
      <SuggestionHeader/>
      <SuggestionPost avatar="/img1.png"  username="User1"/>
      <SuggestionPost avatar="/img2.png"  username="User2"/>
      <SuggestionPost avatar="/img3.png"  username="User3"/>
      <SuggestionPost avatar="/img4.png"  username="USer4"/>
    </VStack>
  )
}

export default SuggestionPosts
