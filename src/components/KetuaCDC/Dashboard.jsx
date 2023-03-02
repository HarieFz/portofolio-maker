import React from "react";
import Banner from "../Banner";
import Portofolio from "./Portofolio";
import TopBar from "./TopBar";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <Banner content="Dashboard e-portofolio CDC" />
      <Portofolio />
    </div>
  );
}
