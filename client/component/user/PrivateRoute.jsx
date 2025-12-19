import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  // If NOT logged in → redirect
  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  // Logged in → allow navigation (including back)
  return <Outlet />;
};

export default PrivateRoute;
