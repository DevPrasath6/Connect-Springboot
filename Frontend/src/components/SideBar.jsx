import React from 'react'
import {Avatar, Box,Flex,Button,Link, Tooltip} from '@chakra-ui/react'
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import {BiLogOut} from 'react-icons/bi'
import { CreatePostLogo, ConnectLogo, ConnectMobileLogo, NotificationsLogo, SearchLogo } from '../assests/logos'
function SideBar() {
  const Navigate = useNavigate();
  const sidebarItems =[
    {
      icon: <AiFillHome size ={25}/>,
      text : 'Home',
      link: '/',
    },

    {
      icon: <SearchLogo/>,
      text :"Search",
    },
    {
      icon: <NotificationsLogo/>,
      text:'Notifications',
    },
    {
      icon:<CreatePostLogo/>,
      text:'Create',
    },
    {
      icon:<Avatar size={'sm'} name='Aditya' src='/profilepic.png'/>,
      text:"Profile",
      link:"/Aditya",
    },
  ];
  return (
    <Box
    height={'100vh'}
    borderRight={'1px solid'}
    borderColor={'whiteAlpha.200'}
    py={6}
    top={0}
    left={0}
    px={4}
    position={'sticky'}
    bg={'blackAlpha.500'}
    backdropFilter={'blur(18px)'}
    >
      <Flex direction={'column'} gap={8} w='full' height={'full'}>
        <Link to = {'/'} as={RouterLink} display={'block'} cursor={'pointer'}>
          <Box display={{base:'none', md:'block'}}>
            <ConnectLogo/>
          </Box>
          <Box display={{base:'block', md:'none'}}>
            <ConnectMobileLogo/>
          </Box>
        </Link>

        <Flex direction={'column'} gap={2} cursor={'pointer'}>
          {sidebarItems.map((item,index)=>
          (
            <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='right'
            ml={1}
            openDelay={500}
            display={{md:"none"}}
            >
              <Link
              display={"flex"}
              alignItems={'center'}
              to={item.link || null}
              as={RouterLink}
              gap={4}
              _hover={{bg:"whiteAlpha.200", transform:'translateX(4px)'}}
              transition={'all 0.2s ease'}
              borderRadius={'xl'}
              p={3}
              w={'full'}
              >
                {item.icon}
                <Box display={{base:'none',md:"block"}} fontWeight={600}>
                   {item.text}
                </Box>
              </Link>
            </Tooltip>
          )
          )}
        </Flex>
        <Tooltip
            hasArrow
            label={'Log Out'}
            placement='right'
            ml={1}
            openDelay={500}
            display={{md:"none"}}
            >
              <Button
              mt={'auto'}
              w={'full'}
              justifyContent={'flex-start'}
              gap={4}
              variant={'ghost'}
              borderRadius={'xl'}
              p={3}
              _hover={{bg:"whiteAlpha.200"}}
              onClick={()=>Navigate("/login")}
              >
                <BiLogOut size={25}/>
                <Box display={{base:'none',md:"block"}} fontWeight={600}>Log Out</Box>
              </Button>
            </Tooltip>

      </Flex>
    </Box>
  )
}

export default SideBar
