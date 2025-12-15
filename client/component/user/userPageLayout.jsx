import React, { useEffect, useState } from 'react'
import UserNavbar from './userNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
const UserPageLayout = () => {
    const [theme, setTheme] = useState("dark-mode")
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  return (
    <>
      <UserNavbar theme={theme} setTheme={setTheme} />
      <div className='min-h-[67vh] bg-primary'>
      <Outlet/>
      </div>
      <Footer/>
    </>

  )
}

export default UserPageLayout
