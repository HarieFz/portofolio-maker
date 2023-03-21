import React from "react";
import { auth } from "../../../config/firebase";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import AuthUser from "../../../utils/user/AuthUser";
import Logo from "../../../assets/logo.png";

export default function TopBar() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      AuthUser.signOut(navigate);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Navbar expand="lg">
      <Container className="px-5">
        <Navbar.Brand as={Link} to="/profile">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-3">
            {AuthUser.isAuthorization() ? (
              <Button variant="danger" onClick={logout}>
                <BiLogOut /> Logout
              </Button>
            ) : (
              <>
                <Button as={Link} to="/login" className="text-white">
                  Login
                </Button>
                <Button variant="outline-primary">Register</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
