import { useAuth } from "../contexts/authProvider";
import { Navigate } from "react-router-dom";
import React from "react";

const RequireAuth = ({ children }) => {
  let auth = useAuth();
  //  let location = useLocation();
  console.log(auth.user);
  console.log(auth.isAuthenticated);
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default RequireAuth;
