import React from "react";
import AuthUser from "../../utils/user/AuthUser";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedUser() {
  if (AuthUser.getAccessToken()) {
    return <Navigate to="/profile" />;
  }

  return <Outlet />;
}
