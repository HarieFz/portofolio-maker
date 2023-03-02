import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/KetuaCDC/Dashboard";
import Login from "../components/KetuaCDC/Login";
import Layout from "../components/Layout";
import EditPortofolio from "../pages/EditPortofolio";
import Home from "../pages/Home";
import Template from "../pages/Template";

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
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Admin */}
        <Route path="/admin">
          <Route index element={<Login />} />
          <Route path="admin-page" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
