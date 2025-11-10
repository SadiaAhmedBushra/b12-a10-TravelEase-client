import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../pages/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user, loading)
  const location = useLocation();

  if (loading) {
    return <LoadingPage></LoadingPage>
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
