import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../utils/user/AuthUser";
import Banner from "../../assets/login-banner.png";
import Logo from "../../assets/logo.png";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
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
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc?.docs[0]?.data();
        AuthUser.storeUserInfoToCookie(user, data);
        Swal.fire({
          text: "Success!",
          title: "Login Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/profile");
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        if (err.code === "auth/user-not-found") {
          return Swal.fire("Something Error!", "User not found!", "error");
        }
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
