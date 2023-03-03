import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../../utils/Admin/Auth";

export default function PrivateRouteAdmin() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/admin/login" />;
  }

  return <Outlet />;
}
