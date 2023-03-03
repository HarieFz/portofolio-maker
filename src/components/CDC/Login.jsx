import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../assets/login-banner.png";
import Logo from "../../assets/logo.png";

export default function LoginCDC() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: "70px" }}>
        <Col lg={5} className="text-end">
          <img src={Banner} alt="" className="rounded" style={{ width: "350px", height: "500px" }} />
        </Col>
        <Col lg={5} className="text-start">
          <Form>
            <img src={Logo} alt="" className="mb-3" />
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#094B72" }}>Username</Form.Label>
              <Form.Control type="text" className="p-3" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#094B72" }}>Password</Form.Label>
              <Form.Control type="password" className="p-3" placeholder="Password" />
            </Form.Group>
            <Button variant="primary w-100 p-3 text-white" as={Link} to="/cdc/dashboard">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
