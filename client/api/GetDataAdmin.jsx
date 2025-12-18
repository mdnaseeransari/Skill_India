import axios from "axios";

export const adminDetailsLoader = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`http://localhost:3000/admin/profile`,{headers: {Authorization:`Bearer ${token}`}});
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Response(error.response?.data?.message || "Failed to load admin details",{ status: error.response?.status || 500 });
  }
};
