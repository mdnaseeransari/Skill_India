import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // "user" or "admin"

  // If logged in
  if (token) {
    if (role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/dashboard" replace />;
  }

  // Not logged in → allow public pages (login/signup)
  return <Outlet />;
};

export default PublicRoute;
