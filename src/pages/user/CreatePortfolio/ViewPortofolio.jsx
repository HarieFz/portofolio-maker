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
  const isEmpty = (value) => value.every((item) => Object.values(item).every((x) => x === null || x === ""));

  return (
    <div>
      <div>
        <img src={bg} alt="" width="100%" />
      </div>

      <div className="d-flex ms-5">
        <div className="editporto__round-pict">
          <img
            src={photo ? URL.createObjectURL(photo) : null}
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

        {isEmpty(achievments) ? null : (
          <>
            <hr />

            <h4 className="mb-4">Achievment</h4>

            {achievments?.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between">
                  <p>{item.name}</p>
                  <p>{item.year}</p>
                </div>
                <img
                  src={item?.file && URL.createObjectURL(item?.file)}
                  alt=""
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </>
        )}

        {isEmpty(work) ? null : (
          <>
            <hr />

            <h4 className="mb-4">Work Experience</h4>

            {work?.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">{item.name}</p>
                  <p>{item.year}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>
                    {item.company} | {item.location}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}

        {isEmpty(education) ? null : (
          <>
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
          </>
        )}

        {isEmpty(organization) ? null : (
          <>
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
          </>
        )}

        {isEmpty(projects) ? null : (
          <>
            <hr />

            <h4 className="mb-4">Projects</h4>

            {projects?.map((item, index) => (
              <div key={index} className="mb-4">
                <img
                  src={item?.file && URL.createObjectURL(item?.file)}
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
          </>
        )}
      </div>
    </div>
  );
}
