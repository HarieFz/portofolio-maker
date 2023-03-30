import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/login-banner.png";
import Logo from "../../assets/logo.png";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          email,
          role: "user",
        }).then(() => {
          setIsLoading(false);
          navigate("/login");
          Swal.fire({
            text: "Success!",
            title: "Register Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          return Swal.fire("Something Error!", "Email already in use", "error");
        }
        Swal.fire("Something Error!", "Please try again later", "error");
      });
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: "50px" }}>
        <Col lg={5} className="ps-5">
          <img
            src={Banner}
            alt=""
            className="rounded d-md-none d-sm-none d-none d-lg-block"
            style={{ width: "350px", height: "500px" }}
          />
        </Col>
        <Col lg={5} className="text-start">
          <Form onSubmit={register}>
            <div className="mb-4">
              <img src={Logo} alt="" />
              <h4 className="mt-4" style={{ color: "#094b72" }}>
                Register
              </h4>
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#094B72" }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                className="p-3"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

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
              {isLoading ? "Loading..." : "Register"}
            </Button>

            <p>
              Have account?{" "}
              <Link to="/login" className="text-primary text-decoration-underline">
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
