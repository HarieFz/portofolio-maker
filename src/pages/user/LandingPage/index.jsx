import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import StudentPortofolio from "./StudentPortofolio";
import TopBar from "../../layouts/TopBar";

export default function LandingPage() {
  return (
    <div>
      <TopBar />
      <Hero />
      <StudentPortofolio />
      <About />
      <Footer />
    </div>
  );
}
