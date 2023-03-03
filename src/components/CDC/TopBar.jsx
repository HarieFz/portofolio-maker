import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { BsBoxArrowLeft } from "react-icons/bs";

export default function TopBar() {
  return (
    <Navbar expand="lg">
      <Container className="px-5">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Button variant="danger">
              <BsBoxArrowLeft className="me-2" />
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
