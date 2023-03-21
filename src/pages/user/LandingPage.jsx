import React from "react";
import About from "../../components/user/landingPage/About";
import Footer from "../../components/user/landingPage/Footer";
import Hero from "../../components/user/landingPage/Hero";
import StudentPortofolio from "../../components/user/landingPage/StudentPortofolio";
import TopBar from "../../components/user/share/TopBar";

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
