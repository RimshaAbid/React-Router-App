import { Outlet } from 'react-router-dom'

import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'

import React from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout;