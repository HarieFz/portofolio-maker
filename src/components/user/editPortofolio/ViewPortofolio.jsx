import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function ViewPortofolio({
  bg,
  photo,
  name,
  skill,
  aboutMe,
  email,
  phone,
  socMed,
  achievments,
  work,
  education,
  organization,
  projects,
}) {
  const isFile = (input) => "File" in window && input instanceof File;

  return (
    <div>
      <div className="stupo__wrapper">
        <img src={bg} alt="" style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "bottom" }} />
        <div className="stupo__overlay stupo__overlay1" />
      </div>

      <div className="d-flex ms-5">
        <div className="editporto__round-pict">
          <img
            src={isFile(photo) ? URL.createObjectURL(photo) : photo}
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

        <h4 className="mb-4">Achievment</h4>

        {achievments?.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between">
              <p>{item.name}</p>
              <p>{item.year}</p>
            </div>
            <img
              src={isFile(item.file) ? URL.createObjectURL(item.file) : item.file.url}
              alt=""
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}

        <hr />

        <h4 className="mb-4">Work Experience</h4>

        {work?.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold">{item.name}</p>
              <p>{item.year}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>{item.company}</p>
              <p>{item.location}</p>
            </div>
          </div>
        ))}

        <hr />

        <h4 className="mb-4">Education</h4>

        {education?.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold">{item.name}</p>
              <p>{item.year}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>{item.study}</p>
            </div>
          </div>
        ))}

        <hr />

        <h4 className="mb-4">Organization</h4>

        {organization?.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold">{item.name}</p>
              <p>{item.year}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>{item.role}</p>
            </div>
          </div>
        ))}

        <hr />

        <h4 className="mb-4">Projects</h4>

        {projects?.map((item, index) => (
          <div key={index} className="mb-4">
            <img
              src={isFile(item.file) ? URL.createObjectURL(item.file) : item.file.url}
              alt=""
              width="100%"
              style={{ objectFit: "cover" }}
            />

            <div className="d-flex justify-content-between">
              <p>{item.name}</p>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
