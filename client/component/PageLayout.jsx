import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const PageLayout = () => {
    const [theme, setTheme] = useState("dark-mode")
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className='min-h-[67vh] bg-primary'>
      <Outlet/>
      </div>
      <Footer/>
    </>

  )
}

export default PageLayout
