import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { BsTelephone, BsDownload, BsCheck2 } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function PreviewPortofolio({
  show,
  setShow,
  photo,
  previewPhoto,
  name,
  skill,
  aboutMe,
  achievments,
  email,
  phone,
  socMed,
  fileCertificate,
  previewFileCertificate,
  nameCertificate,
}) {
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (!show) {
      setFinish(false);
    }
  }, [show]);

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Preview Portofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="stupo__wrapper">
          <img
            src={previewPhoto}
            alt=""
            style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "bottom" }}
          />
          <div className="stupo__overlay stupo__overlay1" />
        </div>

        <div className="d-flex ms-5">
          <div className="editporto__round-pict">
            <img
              src={previewPhoto}
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
                {achievments.map((item, index) => (
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

          <img src={previewFileCertificate} alt="" width="100%" style={{ objectFit: "cover" }} />
          <p className="mt-3 mb-4">{nameCertificate}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-3 mx-auto">
          <Button variant="outline-primary px-5 py-2" onClick={() => setFinish(true)}>
            <BsCheck2 className="me-2" />
            Finish
          </Button>
          <Button variant="primary px-5 py-2" disabled={!finish}>
            <BsDownload className="me-2" />
            Export PDF
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
