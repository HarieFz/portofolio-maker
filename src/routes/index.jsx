import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPortfolioAdmin from "../pages/admin/ListPortofolio";
import LoginAdmin from "../pages/admin/LoginAdmin";
import ListPortfolioCDC from "../pages/cdc/ListPortfolio";
import LoginCDC from "../pages/cdc/LoginCDC";
import CreatePortofolio from "../pages/user/CreatePortofolio";
import EditPortofolio from "../pages/user/EditPortofolio";
import LandingPage from "../pages/user/LandingPage";
import Login from "../pages/user/Login";
import Portofolio from "../pages/user/Portofolio";
import Profile from "../pages/user/Profile";
import Register from "../pages/user/Register";
import PrivateAdmin from "./admin/PrivateAdmin";
import ProtectedAdmin from "./admin/ProtectedAdmin";
import PrivateCDC from "./cdc/PrivateCDC";
import ProtectedCDC from "./cdc/ProtectedCDC";
import PrivateUser from "./user/PrivateUser";
import ProtectedUser from "./user/ProtectedUser";

export default function SetupRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User */}

        <Route path="/" element={<ProtectedUser />}>
          <Route index element={<LandingPage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateUser />}>
          <Route path="profile" element={<Profile />} />
          <Route path="edit-portfolio" element={<EditPortofolio />} />
          <Route path="create-portfolio" element={<CreatePortofolio />} />
        </Route>

        <Route path="/portofolio/:id" element={<Portofolio />} />

        {/* CDC */}

        <Route path="/cdc" element={<ProtectedCDC />}>
          <Route path="login" element={<LoginCDC />} />
        </Route>

        <Route path="/cdc" element={<PrivateCDC />}>
          <Route index element={<ListPortfolioCDC />} />
        </Route>

        {/* Admin */}

        <Route path="/admin" element={<ProtectedAdmin />}>
          <Route path="login" element={<LoginAdmin />} />
        </Route>

        <Route path="/admin" element={<PrivateAdmin />}>
          <Route index element={<ListPortfolioAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
