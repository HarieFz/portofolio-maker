import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Civil from "../../../assets/sipil.png";
import Alex from "../../../assets/alex.png";
import { Link } from "react-router-dom";

export default function Portofolio() {
  return (
    <Container className="mb-5">
      <Row className="justify-content-md-center gy-4">
        <Col lg={5}>
          <Link to={"/edit-portofolio"}>
            <Card>
              <div className="stupo__wrapper">
                <Card.Img
                  variant="top"
                  src={Civil}
                  style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
                />
                <div className="stupo__overlay stupo__overlay1 rounded-top" />
              </div>
              <Card.Body className="d-flex">
                <div className="stupo__round-pict">
                  <img src={Alex} alt="Alex" />
                </div>
                <div>
                  <Card.Title className="m-0">Alex</Card.Title>
                  <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                    Civil Engineering
                  </Card.Text>
                </div>
              </Card.Body>
              <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
            </Card>
          </Link>
        </Col>
        <Col lg={5}>
          <Card>
            <div className="stupo__wrapper">
              <Card.Img
                variant="top"
                src={Civil}
                style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
              />
              <div className="stupo__overlay stupo__overlay1 rounded-top" />
            </div>
            <Card.Body className="d-flex">
              <div className="stupo__round-pict">
                <img src={Alex} alt="Alex" />
              </div>
              <div>
                <Card.Title className="m-0">Alex</Card.Title>
                <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                  Civil Engineering
                </Card.Text>
              </div>
            </Card.Body>
            <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <div className="stupo__wrapper">
              <Card.Img
                variant="top"
                src={Civil}
                style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
              />
              <div className="stupo__overlay stupo__overlay1 rounded-top" />
            </div>
            <Card.Body className="d-flex">
              <div className="stupo__round-pict">
                <img src={Alex} alt="Alex" />
              </div>
              <div>
                <Card.Title className="m-0">Alex</Card.Title>
                <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                  Civil Engineering
                </Card.Text>
              </div>
            </Card.Body>
            <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <div className="stupo__wrapper">
              <Card.Img
                variant="top"
                src={Civil}
                style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
              />
              <div className="stupo__overlay stupo__overlay1 rounded-top" />
            </div>
            <Card.Body className="d-flex">
              <div className="stupo__round-pict">
                <img src={Alex} alt="Alex" />
              </div>
              <div>
                <Card.Title className="m-0">Alex</Card.Title>
                <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                  Civil Engineering
                </Card.Text>
              </div>
            </Card.Body>
            <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <div className="stupo__wrapper">
              <Card.Img
                variant="top"
                src={Civil}
                style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
              />
              <div className="stupo__overlay stupo__overlay1 rounded-top" />
            </div>
            <Card.Body className="d-flex">
              <div className="stupo__round-pict">
                <img src={Alex} alt="Alex" />
              </div>
              <div>
                <Card.Title className="m-0">Alex</Card.Title>
                <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                  Civil Engineering
                </Card.Text>
              </div>
            </Card.Body>
            <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
          </Card>
        </Col>
        <Col lg={5}>
          <Card>
            <div className="stupo__wrapper">
              <Card.Img
                variant="top"
                src={Civil}
                style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
              />
              <div className="stupo__overlay stupo__overlay1 rounded-top" />
            </div>
            <Card.Body className="d-flex">
              <div className="stupo__round-pict">
                <img src={Alex} alt="Alex" />
              </div>
              <div>
                <Card.Title className="m-0">Alex</Card.Title>
                <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                  Civil Engineering
                </Card.Text>
              </div>
            </Card.Body>
            <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
