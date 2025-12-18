import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import AdminNavbar from './AdminNavbar'
const AdminPageLayout = () => {
    const [theme, setTheme] = useState("dark-mode")
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  return (
    <>
      <AdminNavbar theme={theme} setTheme={setTheme} />
      <div className='min-h-[67vh] bg-secondary'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default AdminPageLayout
