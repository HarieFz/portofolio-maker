import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/login-banner.png";
import Logo from "../../assets/logo.png";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../../utils/Admin/Auth";

export default function LoginAdmin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        Auth.storeUserInfoToCookie(user);
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              <Form.Control
                type="email"
                className="p-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#094B72" }}>Password</Form.Label>
              <Form.Control
                type="password"
                className="p-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary w-100 p-3 text-white" onClick={signIn}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
