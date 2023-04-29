import React, { useState } from "react";
import Banner from "../../components/Banner";
import { Col, Container, Form, Row } from "react-bootstrap";
import List from "./components/List";

export default function ListPortfolio() {
  // Input Search Bar
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Container>
      <Banner content="Dashboard E-Portfolio CDC" />

      <Row className="justify-content-md-center mb-3">
        <Col lg={5}>
          <Form.Group className="mb-3">
            <Form.Label>Search Skill</Form.Label>
            <Form.Control type="text" placeholder="Search..." onChange={inputHandler} />
          </Form.Group>
        </Col>
        <Col lg={5}></Col>
      </Row>

      <List input={inputText} />
    </Container>
  );
}
