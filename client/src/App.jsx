import Navbar from "../component/Navbar"
import Home from "../component/Home"
import Course from "../component/Course";
import Cart from "../component/Cart"
import Login from "../component/Login";
import Signin from "../component/signin";
import Footer from "../component/Footer";
import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState("dark-mode")

   useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  

  return (
    <>

        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signin" element={<Signin/>}/>
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App
