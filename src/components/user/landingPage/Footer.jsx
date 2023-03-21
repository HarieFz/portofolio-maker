import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <hr className="m-0" />
      <Container className="my-5">
        <Row>
          <Col lg={5}>
            <p className="fw-bold stripe2">
              <span>ADDRESS</span>
            </p>
            <p>
              Garut Institute of Technology Campus, <br /> Jl. Mayor Syamsu No.1 Garut 44151
            </p>
          </Col>
          <Col lg={4}>
            <p className="fw-bold stripe2">
              <span>EMAIL</span>
            </p>
            <p>pusatkarir@itg.ac.id</p>
          </Col>
          <Col lg={3}>
            <p className="fw-bold stripe2">
              <span>FOLLOW US</span>
            </p>
            <div className="d-flex gap-3">
              <FaFacebookF size="20px" />
              <FaTwitter size="20px" />
              <FaInstagram size="20px" />
              <FaYoutube size="20px" />
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <p className="text-center text-black-50">© 2023 Career Development Center ITG</p>
    </div>
  );
}
