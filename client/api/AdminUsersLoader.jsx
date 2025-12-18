import axios from "axios";

export const adminUsersLoader = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Response("Unauthorized", { status: 401 });
  }
  const res = await axios.get("http://localhost:3000/admin/users",{headers: {Authorization: `Bearer ${token}`}});

  return res.data; //  this goes to useLoaderData()
};
