import Home from "../component/Home"
import Course from "../component/Course";
import Cart from "../component/cart/Cart"
import Buy from "../component/cart/Buy"
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import Admin from "../component/admin/Admin";
import Forgot from "../component/forgot";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from "../component/CourseDetails";
import PageLayout from "../component/PageLayout";
import { courseLoader } from "../api/GetAPIData";
import { courseDetailsLoader } from "../api/getSingleData";
// import Dashboard from "../component/Dashboard";
import { dashboardLoader } from "../api/GetDashboardData";
import Learning from "../component/Learning/Learning";
import UserPageLayout from "../component/user/userPageLayout";
import UserProfile from "../component/user/UserProfile";

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
        {
          path:"/:courseId",
          element:<CourseDetails/>,
          loader:courseDetailsLoader
        },
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
        }
      ]
    },
    {
      path:"/dashboard",
      element:<UserPageLayout/>,
      children:[
        {
          index: true,
          element:<Home/>,
          loader:courseLoader
        },
        {
          path:":courseId",
          element:<CourseDetails/>,
          loader:courseDetailsLoader
        },
        {
          path:"course",
          element:<Course/>,
          loader:courseLoader
        },
        {
          path:"course/:courseId",
          element:<CourseDetails/>,
          loader:courseDetailsLoader
        },
        {
          path:"Cart",
          element:<Cart/>
        },
        {
          path:"Login",
          element:<Login/>
        },
        {
          path:"Buy",
          element:<Buy/>
        },
        {
          path:"Forgot",
          element:<Forgot/>
        },
        {
          path:"Learning",
          element:<Learning/>
        },
        {
          path:"profile",
          element:<UserProfile/>,
          loader:dashboardLoader      
        }       
      ]
    },

  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
