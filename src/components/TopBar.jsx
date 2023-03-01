import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

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
            <Nav.Link as={HashLink} to="/#student-portofolio">
              Preview Portofolio
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
