// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/userState";

const ProtectedRoute = ({ children }) => {
  const user = useRecoilValue(userState); // Get user state from Recoil

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
