import axios from "axios";
import { redirect} from "react-router-dom";

async function getUserData(token) {
    const res = await axios.get("http://localhost:3000/user/userdata",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //  this data will be available in Dashboard component
    // console.log("db user data:",res.data)
  return res.data.user;
}


const getEnrolledCourses = async (token) => {
  const res = await axios.get("http://localhost:3000/user/enrolledcourses",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const dashboardLoader = async () => {
  const token = localStorage.getItem("token");
  // No token → redirect
  if (!token) {
    throw redirect("/Login");
  }
  try {
    const user = await getUserData(token);
    const enrolled = await getEnrolledCourses(token);
    return {user,enrolled};
    
  } catch (error) {
    localStorage.removeItem("token");
    throw redirect("/Login");
  }
};
