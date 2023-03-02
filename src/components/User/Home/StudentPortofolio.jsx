import React from "react";
import { Container } from "react-bootstrap";
import Stupo from "../../../assets/student-portofolio.png";

export default function StudentPortofolio() {
  return (
    <div id="student-portofolio" className="mb-5">
      <Container>
        <p className="stripe mb-5 fw-bold">
          <span>PREVIEW PORTOFOLIO</span>
        </p>

        {/* Cards */}
        <div className="text-center">
          <img src={Stupo} alt="" />
        </div>
      </Container>
    </div>
  );
}
