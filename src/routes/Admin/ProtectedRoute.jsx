import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../../utils/Admin/Auth";

export default function ProtectedRouteAdmin() {
  if (Auth.getAccessToken()) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <Outlet />;
}
