import React, { useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PreviewPortofolio from "./PreviewPortofolio";
import { useLocation } from "react-router-dom";

export default function FormProfile() {
  const { state } = useLocation();

  // State Form
  const [selectedPhoto, setSelectedPhoto] = useState(state.photo);
  const [name, setName] = useState(state.name);
  const [skill, setSkill] = useState(state.skill);
  const [aboutMe, setAboutMe] = useState(state.about_me);
  const [email, setEmail] = useState(state.email);
  const [phone, setPhone] = useState(state.phone);
  const [socMed, setSocMed] = useState(state.socmed);

  // handleChange form
  const onSelectedPhoto = (e) => setSelectedPhoto(e.target.files[0]);
  const onName = (e) => setName(e.target.value);
  const onSkill = (e) => setSkill(e.target.value);
  const onAboutMe = (e) => setAboutMe(e.target.value);
  const onEmail = (e) => setEmail(e.target.value);
  const onPhone = (e) => setPhone(e.target.value);
  const onSocMed = (e) => setSocMed(e.target.value);

  // Achievment Fields
  const [achievmentFields, setAchievmentFields] = useState(state.achievments);

  const onAchievmentChange = (index, e) => {
    let data = [...achievmentFields];
    data[index][e.target.name] = e.target.value;
    setAchievmentFields(data);
  };

  const addAchievmentFields = () => {
    let newField = { achievment: "" };

    setAchievmentFields([...achievmentFields, newField]);
  };

  const removeAchievmentFields = (i) => {
    let newAchievmentFormValues = [...achievmentFields];
    newAchievmentFormValues.splice(i, 1);
    setAchievmentFields(newAchievmentFormValues);
  };

  // Certificate Fields
  const [certificateFields, setCertificateFields] = useState(state.certificates);

  const onCertificateChange = (index, e) => {
    let data = [...certificateFields];
    if (e.target.name === "file") {
      data[index][e.target.name] = e.target.files[0];
    } else {
      data[index][e.target.name] = e.target.value;
    }

    setCertificateFields(data);
  };

  const addCertificateFields = () => {
    let newCertifField = { file: null, name: "" };

    setCertificateFields([...certificateFields, newCertifField]);
  };

  const removeCertificateFields = (i) => {
    let newCertificateFormValues = [...certificateFields];
    newCertificateFormValues.splice(i, 1);
    setCertificateFields(newCertificateFormValues);
  };

  // Custome Input File Photo Profile
  const fileInput = useRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  // Custome Input File Certificate
  const fileInputCertificate = useRef();

  const handleCertificateClick = () => {
    fileInputCertificate.current.click();
  };

  // Validate is File or not
  const isFile = (input) => "File" in window && input instanceof File;

  // Modal
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container className="mb-5">
        <Form>
          <Form.Label>Photo Profile</Form.Label>
          <div className="d-flex mb-4" onClick={handleClick}>
            <div className="rounded-circle shadow" style={{ cursor: "pointer", width: "150px", height: "150px" }}>
              <img
                src={isFile(selectedPhoto) ? URL.createObjectURL(selectedPhoto) : selectedPhoto}
                alt="Preview"
                className="rounded-circle p-1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <Form.Group>
              <Form.Control type="file" className="d-none" ref={fileInput} onChange={onSelectedPhoto} />
            </Form.Group>
          </div>

          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" value={name} onChange={onName} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Your Skills" value={skill} onChange={onSkill} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Tell About You..."
              style={{ height: "150px" }}
              value={aboutMe}
              onChange={onAboutMe}
            />
          </Form.Group>

          <Form.Label>Achievments</Form.Label>
          {achievmentFields.map((item, index) => (
            <Row className="mb-4" key={index}>
              <Form.Group as={Col} lg={6}>
                <Form.Control
                  type="text"
                  name="achievment"
                  placeholder="Achievment"
                  value={item.achievment}
                  onChange={(e) => onAchievmentChange(index, e)}
                />
              </Form.Group>

              {index ? (
                <Form.Group as={Col} lg={6}>
                  <Button onClick={() => removeAchievmentFields(index)}>Remove</Button>
                </Form.Group>
              ) : null}
            </Row>
          ))}

          <Button variant="outline-primary mb-4" onClick={addAchievmentFields}>
            Add More +
          </Button>

          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Your Mail" value={email} onChange={onEmail} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Your Number" value={phone} onChange={onPhone} />
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} lg={6}>
              <Form.Label>Social Media</Form.Label>
              <Form.Control type="text" placeholder="Your Instagram" value={socMed} onChange={onSocMed} />
            </Form.Group>
          </Row>

          <Form.Label>Upload your works / certificates / achievements</Form.Label>
          {certificateFields?.map((item, index) => (
            <div key={index}>
              <div>
                <div
                  className="border rounded"
                  style={{ cursor: "pointer", width: "100&", height: "auto" }}
                  onClick={handleCertificateClick}
                >
                  {item.file ? (
                    <div>
                      <img
                        src={isFile(item.file) ? URL.createObjectURL(item.file) : item.file}
                        alt=""
                        style={{ objectFit: "cover", width: "100%", height: "auto" }}
                      />
                    </div>
                  ) : (
                    <div className="text-center text-black-50" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                      <AiOutlineCloudUpload size="90px" />
                      <p>Upload Your Document</p>
                    </div>
                  )}
                </div>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="file"
                    name="file"
                    className="d-none"
                    ref={fileInputCertificate}
                    onChange={(e) => onCertificateChange(index, e)}
                  />
                </Form.Group>
              </div>

              <Row className="mb-4">
                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name Documents"
                    value={item.name}
                    onChange={(e) => onCertificateChange(index, e)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={6}>
                  <Button onClick={() => removeCertificateFields(index)}>Remove</Button>
                </Form.Group>
              </Row>
            </div>
          ))}
        </Form>

        <Button variant="outline-primary mb-4" onClick={addCertificateFields}>
          Add More +
        </Button>

        <Button className="w-100" onClick={() => setShow(true)}>
          Preview Portofolio
        </Button>
      </Container>
      <PreviewPortofolio
        show={show}
        setShow={setShow}
        photo={selectedPhoto}
        name={name}
        skill={skill}
        aboutMe={aboutMe}
        achievments={achievmentFields}
        email={email}
        phone={phone}
        socMed={socMed}
        certificates={certificateFields}
      />

      <hr />
      <p className="text-center text-black-50">© 2023 Career Development Center ITG</p>
    </div>
  );
}
