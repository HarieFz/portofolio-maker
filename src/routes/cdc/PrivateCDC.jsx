import React from "react";
import AuthCDC from "../../utils/cdc/AuthCDC";
import Layout from "../../components/cdc/Layout";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateCDC() {
  if (!AuthCDC.isAuthorization()) {
    return <Navigate to="/cdc/login" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
