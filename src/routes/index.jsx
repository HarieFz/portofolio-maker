import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}
