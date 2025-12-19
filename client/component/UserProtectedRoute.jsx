import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  if (role != "user") {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default UserProtectedRoute;
