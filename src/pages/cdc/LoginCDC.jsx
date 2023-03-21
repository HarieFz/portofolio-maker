import React, { useState } from "react";
import AuthCDC from "../../utils/cdc/AuthCDC";
import Banner from "../../assets/login-banner.png";
import Logo from "../../assets/logo.png";
import Swal from "sweetalert2";
import { auth, db } from "../../config/firebase";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginCDC() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const q = query(collection(db, "cdc"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc?.docs[0]?.data();
        AuthCDC.storeCDCInfoToCookie(user, data);
        Swal.fire({
          text: "Success!",
          title: "Login Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/cdc/list-portfolio");
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        Swal.fire("Something Error!", "Please check again Email and Password", "error");
      });
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: "70px" }}>
        <Col lg={5} className="text-end">
          <img src={Banner} alt="" className="rounded" style={{ width: "350px", height: "500px" }} />
        </Col>
        <Col lg={5} className="text-start">
          <Form onSubmit={signIn}>
            <img src={Logo} alt="" className="mb-3" />
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
