import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardCDC from "../components/CDC/Dashboard";
import DashboardAdmin from "../components/Admin/Dashboard";
import LoginCDC from "../components/CDC/Login";
import LoginAdmin from "../components/Admin/Login";
import Layout from "../components/Layout";
import EditPortofolio from "../pages/EditPortofolio";
import Home from "../pages/Home";
import Template from "../pages/Template";
import ProtectedRouteAdmin from "./Admin/ProtectedRoute";
import PrivateRouteAdmin from "./Admin/PrivateRoute";

export default function SetupRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="choose-template" element={<Template />} />
          <Route path="edit-portofolio" element={<EditPortofolio />} />
        </Route>

        {/* CDC */}
        <Route path="/cdc">
          <Route path="login" element={<LoginCDC />} />
          <Route path="dashboard" element={<DashboardCDC />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<ProtectedRouteAdmin />}>
          <Route path="login" element={<LoginAdmin />} />
        </Route>

        <Route path="/admin" element={<PrivateRouteAdmin />}>
          <Route path="dashboard" element={<DashboardAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
