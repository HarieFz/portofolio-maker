import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useParams } from "react-router-dom";

export default function Portofolio() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    bg,
    photo,
    name,
    skill,
    about_me,
    email,
    phone,
    socmed,
    achievments,
    work,
    education,
    organization,
    projects,
  } = data;

  // Get Data
  const fetchData = async () => {
    const unsub = onSnapshot(doc(db, "portofolio", id), (doc) => {
      setData(doc.data());
      setIsLoading(false);
    });

    return unsub;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {isLoading ? (
        <h1 className="text-center mt-5">Loading...</h1>
      ) : (
        <div className="shadow">
          <div className="stupo__wrapper">
            <img
              src={bg}
              alt=""
              style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "bottom" }}
            />
            <div className="stupo__overlay stupo__overlay1" />
          </div>

          <div className="d-flex ms-5">
            <div className="editporto__round-pict">
              <img
                src={photo}
                alt=""
                className="rounded-circle shadow"
                width="150px"
                height="150px"
                style={{ border: "solid 5px #ffffff" }}
              />
            </div>
            <div className="mt-3 ms-3">
              <h4>{name}</h4>
              <p>{skill}</p>
            </div>
          </div>

          <div className="px-5 pb-2">
            <hr />

            <Row className="mb-4">
              <Col lg={3}>
                <h5>About Me</h5>
              </Col>
              <Col lg={9}>{about_me}</Col>
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
                {socmed}
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
                <img src={item.file.url} alt="" width="100%" style={{ objectFit: "cover" }} />
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
                <img src={item.file.url} alt="" width="100%" style={{ objectFit: "cover" }} />

                <div className="d-flex justify-content-between">
                  <p>{item.name}</p>
                  <p>{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
