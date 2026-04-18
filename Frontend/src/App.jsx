import React from 'react'

import {Routes,Route} from "react-router-dom"
import PageLayout from './Layouts/PageLayout'
import ProfilePage from './components/ProfilePage/ProfilePage'
import HomePage from './HomePage/HomePage'
import AuthPage from './components/AuthPage/AuthPage'
import CreatePost from './components/CreatePost/CreatePost'
import Feed from './components/Feed/Feed'


export default function App() {
  return (
    <PageLayout>
    <Routes>
        <Route path='/login' element={<AuthPage/>}/>
        <Route path='/' element ={<Feed/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/:username' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}
