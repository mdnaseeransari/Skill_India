import Home from "../component/Home"
import Course from "../component/Course";
import Cart from "../component/cart/Cart"
import Buy from "../component/cart/Buy"
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import Forgot from "../component/forgot";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from "../component/CourseDetails";
import PageLayout from "../component/PageLayout";
import { courseLoader } from "../api/GetAPIData";
import { courseDetailsLoader } from "../api/getSingleData";
import { dashboardLoader } from "../api/GetDashboardData";
import Learning from "../component/Learning/Learning";
import UserPageLayout from "../component/user/userPageLayout";
import UserProfile from "../component/user/UserProfile";
import AdminPageLayout from "../component/admin/AdminPageLayout";
import AdminHomePage from "../component/admin/AdminHomePage";
import ManageCourse from "../component/admin/ManageCourse";
import AddCourse from "../component/admin/AddCourse";
import EditCourse from "../component/admin/EditCourse";
import { editCourseLoader } from "../api/UpdateSingleData";
import ManageUser from "../component/admin/ManageUser";
import { adminUsersLoader } from "../api/AdminUsersLoader";
import { adminDetailsLoader } from "../api/GetDataAdmin";

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
      loader:dashboardLoader,
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
    {
      path:"/admin",
      element:<AdminPageLayout/>,
      children:[
        {
          index: true,
          element:<AdminHomePage/>,
          loader:adminDetailsLoader
        },
        {
          path:"managecourse",
          element:<ManageCourse/>,
          loader:courseLoader
        },
        {
          path:"managecourse/addcourse",
          element:<AddCourse/>,
        },
        {
          path:"managecourse/editcourse/:courseId",
          element:<EditCourse/>,
          loader:editCourseLoader
        },
        {
          path:"manageuser",
          element:<ManageUser/>,
          loader:adminUsersLoader
        }

      ]
    }


  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
