import React from 'react'
import { Grid } from '@chakra-ui/react'
import ProfilePost from './ProfilePost'


function ProfilePosts({img}) {
  return (
    <>
    <Grid templateColumns={{base:'repeat(2,1fr)', md:'repeat(3,1fr)'}} gap={3} columnGap={3} >
        <ProfilePost img='/img1.png'/>
        <ProfilePost img='/img2.png'/>
        <ProfilePost img='/img3.png'/>
        <ProfilePost img='/auth.png'/>
    </Grid>

    </>
  )
}

export default ProfilePosts
