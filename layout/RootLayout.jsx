import React from 'react'
import Header from '../components/USER/Header'
import Footer from '../components/USER/Footer'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/USER/UserHeader'

import { useState } from 'react'

function RootLayout() {
  const [isUserAuth, setIsAuth]=useState(false)
  return (
    <>
    {isUserAuth ? <UserHeader/> :  <Header/> }
     <Outlet/>

    <Footer/>
    </>
  )
}

export default RootLayout