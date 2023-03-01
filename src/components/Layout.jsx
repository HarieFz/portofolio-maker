import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
}
