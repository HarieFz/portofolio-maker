import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Arsitek from "../../../assets/arsitek.png";

export default function ViewPortofolio({
  photo,
  name,
  skill,
  aboutMe,
  achievments,
  email,
  phone,
  socMed,
  certificates,
}) {
  return (
    <div>
      <div className="stupo__wrapper">
        <img
          src={Arsitek}
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "bottom" }}
        />
        <div className="stupo__overlay stupo__overlay1" />
      </div>

      <div className="d-flex ms-5">
        <div className="editporto__round-pict">
          <img
            src={URL.createObjectURL(photo)}
            alt=""
            className="rounded-circle shadow"
            width="200px"
            height="200px"
            style={{ border: "solid 5px #ffffff" }}
          />
        </div>
        <div className="mt-5 ms-5">
          <h4>{name}</h4>
          <p>{skill}</p>
        </div>
      </div>

      <div className="px-5">
        <hr />

        <Row className="mb-4">
          <Col lg={3}>
            <h4>About Me</h4>
          </Col>
          <Col lg={9}>{aboutMe}</Col>
        </Row>

        <Row className="mb-4">
          <Col lg={3}>
            <h4>Achievment</h4>
          </Col>
          <Col lg={9}>
            <ul>
              {achievments?.map((item, index) => (
                <li key={index}>{item.achievment}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <FiMail className="me-2" />
            {email}
          </Col>
          <Col>
            <BsTelephone className="me-2" />
            {phone}
          </Col>
          <Col>
            <FaInstagram className="me-2" />
            {socMed}
          </Col>
        </Row>

        <hr />

        <h4 className="mb-4">Portofolio</h4>

        {certificates?.map((item, index) => (
          <div key={index}>
            <img
              src={item?.file && URL.createObjectURL(item?.file)}
              alt=""
              width="100%"
              style={{ objectFit: "cover" }}
            />
            <p className="mt-3 mb-4">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
