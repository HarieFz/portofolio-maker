import React from "react";
import About from "../components/User/Home/About";
import Footer from "../components/User/Home/Footer";
import Hero from "../components/User/Home/Hero";
import StudentPortofolio from "../components/User/Home/StudentPortofolio";

export default function Home() {
  return (
    <div>
      <Hero />
      <StudentPortofolio />
      <About />
      <Footer />
    </div>
  );
}
