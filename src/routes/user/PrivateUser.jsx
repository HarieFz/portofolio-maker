import React from "react";
import AuthUser from "../../utils/user/AuthUser";
import Layout from "../../components/user/share/Layout";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateUser() {
  if (!AuthUser.isAuthorization()) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
