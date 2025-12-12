import Navbar from "../component/Navbar"
import Home from "../component/Home"
import Course from "../component/Course";
import Cart from "../component/cart/Cart"
import Buy from "../component/cart/Buy"
import Login from "../component/Login";
import Signin from "../component/signin";
import Footer from "../component/Footer";
import Admin from "../component/admin/Admin";
import Forgot from "../component/forgot";
import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../component/Profile";


function App() {
  const [theme, setTheme] = useState("dark-mode")

   useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="grow flex flex-col">
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Buy" element={<Buy/>}/>
          <Route path="/Forgot" element={<Forgot/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
