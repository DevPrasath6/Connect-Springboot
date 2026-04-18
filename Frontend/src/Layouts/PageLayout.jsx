import React from 'react'
import {Box,Flex} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import "../index.css"
import SideBar from '../components/SideBar'
function PageLayout({children}) {
    const {pathname} = useLocation();
  const canRenderSidebar = pathname !== "/login";
  return (
  <Flex minH="100vh">
        {canRenderSidebar ? (
      <Box w={{base:'0', md:'260px'}} flexShrink={0}>
            <SideBar/>
           </Box>

        ) : null}
    <Box flex={1} minW={0}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout
