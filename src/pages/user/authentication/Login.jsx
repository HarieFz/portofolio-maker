import React, { useState } from "react";
import AuthUser from "../../../utils/AuthUser";
import Banner from "../../../assets/login-banner.png";
import Logo from "../../../assets/logo.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../../hooks/authentication/signIn";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn(email, password, "users", AuthUser.storeUserInfoToCookie, navigate, "/profile", setIsLoading);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: "70px" }}>
        <Col lg={5} className="ps-5">
          <img
            src={Banner}
            alt=""
            className="rounded d-md-none d-sm-none d-none d-lg-block"
            style={{ width: "350px", height: "500px" }}
          />
        </Col>
        <Col lg={5} className="text-start">
          <Form onSubmit={handleSignIn}>
            <div className="mb-4">
              <img src={Logo} alt="" />
              <h4 className="mt-4" style={{ color: "#094b72" }}>
                Login
              </h4>
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#094B72" }}>Email</Form.Label>
              <Form.Control
                type="email"
                className="p-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ color: "#094B72" }}>Password</Form.Label>
              <Form.Control
                type="password"
                className="p-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary w-100 p-3 text-white mb-3" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </Button>

            <p>
              Don't have account?{" "}
              <Link to="/register" className="text-primary text-decoration-underline">
                Register
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
