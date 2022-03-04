import { useAuth } from "../contexts/authProvider";
import { Navigate } from "react-router-dom";
import React from "react";

const RequireAuth = ({ children }) => {
  let auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;
