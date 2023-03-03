import React from "react";
import Banner from "../Banner";
import Portofolio from "./Portofolio";
import TopBar from "./TopBar";

export default function DashboardAdmin() {
  return (
    <div>
      <TopBar />
      <Banner content="Dashboard E-Portofolio Admin" />
      <Portofolio />
    </div>
  );
}
