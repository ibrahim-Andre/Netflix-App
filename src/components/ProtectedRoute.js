import { children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const ProtectedRoute = () => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
