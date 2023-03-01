import React from "react";
import About from "../components/Home/About";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import StudentPortofolio from "../components/Home/StudentPortofolio";

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
