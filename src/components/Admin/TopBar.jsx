import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { BsBoxArrowLeft } from "react-icons/bs";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import Auth from "../../utils/Admin/Auth";

export default function TopBar() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      Auth.signOut(navigate);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Navbar expand="lg">
      <Container className="px-5">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Button variant="danger" onClick={logout}>
              <BsBoxArrowLeft className="me-2" />
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
