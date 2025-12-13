import Home from "../component/Home"
import Course from "../component/Course";
import Cart from "../component/cart/Cart"
import Buy from "../component/cart/Buy"
import Login from "../component/Login";
import SignUp from "../component/signUp";
import Admin from "../component/admin/Admin";
import Forgot from "../component/forgot";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from "../component/CourseDetails";
import PageLayout from "../component/PageLayout";
import { courseLoader } from "../api/GetAPIData";
import { courseDetailsLoader } from "../api/getSingleData";


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<PageLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
          loader:courseLoader
        },
        // {
        //   path:"/:courseId",
        //   element:<CourseDetails/>
        // },
        {
          path:"/course",
          element:<Course/>,
          loader:courseLoader
        },
        {
          path:"/course/:courseId",
          element:<CourseDetails/>,
          loader:courseDetailsLoader
        },
        {
          path:"/Cart",
          element:<Cart/>
        },
        {
          path:"/Login",
          element:<Login/>
        },
        {
          path:"/SignUp",
          element:<SignUp/>
        },
        {
          path:"/Admin",
          element:<Admin/>
        },
        {
          path:"/Buy",
          element:<Buy/>
        },
        {
          path:"/Forgot",
          element:<Forgot/>
        },
      ]
    }
  ])

  return (
    <>
      {/* <div className="min-h-screen flex flex-col bg-secondary">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/course/:courseId" element={<CourseDetails/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Buy" element={<Buy/>}/>
          <Route path="/Forgot" element={<Forgot/>}/>
        </Routes>
        </div>
        <Footer/>
      </div> */}
       <RouterProvider router={router}/>
    </>
  )
}

export default App
