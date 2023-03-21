import React from "react";
import AuthAdmin from "../../utils/admin/AuthAdmin";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../../components/admin/Layout";

export default function PrivateAdmin() {
  if (!AuthAdmin.isAuthorization()) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
