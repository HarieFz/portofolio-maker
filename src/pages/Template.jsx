import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Home/Footer";
import Portofolio from "../components/Template/Portofolio";

export default function Template() {
  return (
    <div>
      <Banner content="Choose Your Template" />
      <Portofolio />
      <Footer />
    </div>
  );
}
