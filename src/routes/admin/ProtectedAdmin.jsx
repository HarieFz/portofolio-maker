import React from "react";
import AuthAdmin from "../../utils/admin/AuthAdmin";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdmin() {
  if (AuthAdmin.getAccessToken()) {
    return <Navigate to="/admin/list-portfolio" />;
  }

  return <Outlet />;
}
