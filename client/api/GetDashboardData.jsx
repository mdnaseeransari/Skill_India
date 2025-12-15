import axios from "axios";
import { redirect} from "react-router-dom";

export async function dashboardLoader() {
  const token = localStorage.getItem("token");

  //  If no token → go to login
  if (!token) {
    return redirect("/Login");
  }

  try {
    const res = await axios.get("http://localhost:3000/user/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //  this data will be available in Dashboard component
    console.log("db user data:",res.data)
    return res.data;

  } catch (error) {
    // token expired / invalid
    localStorage.removeItem("token");
    return redirect("/Login");
  }
}
