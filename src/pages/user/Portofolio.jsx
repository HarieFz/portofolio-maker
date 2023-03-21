import React, { useEffect, useState } from "react";
import Background from "../../assets/arsitek.png";
import { BsTelephone } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useParams } from "react-router-dom";

export default function Portofolio() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  // Get Data
  const fetchData = async () => {
    const unsub = onSnapshot(doc(db, "portofolio", id), (doc) => {
      setData(doc.data());
    });

    return unsub;
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="shadow">
        <div className="stupo__wrapper">
          <img
            src={Background}
            alt=""
            style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "bottom" }}
          />
          <div className="stupo__overlay stupo__overlay1" />
        </div>

        <div className="d-flex ms-5">
          <div className="editporto__round-pict">
            <img
              src={data?.photo}
              alt=""
              className="rounded-circle shadow"
              width="150px"
              height="150px"
              style={{ border: "solid 5px #ffffff" }}
            />
          </div>
          <div className="mt-3 ms-3">
            <h4>{data?.name}</h4>
            <p>{data?.skill}</p>
          </div>
        </div>

        <div className="px-5 pb-2">
          <hr />

          <Row className="mb-4">
            <Col lg={3}>
              <h5>About Me</h5>
            </Col>
            <Col lg={9}>{data?.about_me}</Col>
          </Row>

          <Row className="mb-4">
            <Col lg={3}>
              <h5>Achievment</h5>
            </Col>
            <Col lg={9}>
              {data?.achievments?.map((achiev, index) => (
                <ul key={index}>
                  <li>{achiev.achievment}</li>
                </ul>
              ))}
            </Col>
          </Row>

          <Row>
            <Col>
              <FiMail className="me-2" />
              {data?.email}
            </Col>
            <Col>
              <BsTelephone className="me-2" />
              {data?.phone}
            </Col>
            <Col>
              <FaInstagram className="me-2" />
              {data?.socmed}
            </Col>
          </Row>

          <hr />

          <h5 className="mb-4">Portofolio</h5>

          {data?.certificates?.map((value, index) => (
            <div key={index}>
              <img src={value?.file} alt="Certificate" width="100%" style={{ objectFit: "cover" }} />
              <p className="mt-3 mb-4">{value?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}