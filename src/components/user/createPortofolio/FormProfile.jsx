import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PreviewPortofolio from "./PreviewPortofolio";
import ModalBg from "./ModalBg";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { bytesConverter } from "../../../utils/bytesConverter";

const defaultBg =
  "https://firebasestorage.googleapis.com/v0/b/portofolio-maker-93914.appspot.com/o/backgrounds%2Fbg-1.png?alt=media&token=1b150bab-8449-4d6c-9b1d-83ec22f6f8f7";

export default function FormProfile() {
  // State Form
  const [selectedBg, setSelectedBg] = useState(defaultBg);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [previewPhoto, setPreviewPhoto] = useState();
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [socMed, setSocMed] = useState("");

  // handleChange form
  const onSelectedBg = (e) => setSelectedBg(e.target.value);
  const onSelectedPhoto = (e) => setSelectedPhoto(e.target.files[0]);
  const onName = (e) => setName(e.target.value);
  const onSkill = (e) => setSkill(e.target.value);
  const onAboutMe = (e) => setAboutMe(e.target.value);
  const onEmail = (e) => setEmail(e.target.value);
  const onPhone = (e) => setPhone(e.target.value);
  const onSocMed = (e) => setSocMed(e.target.value);

  // Achievment Fields
  const [achievments, setAchievments] = useState([{ name: "", year: "", file: null }]);

  const onAchievmentChange = (e, index) => {
    let data = [...achievments];
    if (e.target.name === "file") {
      data[index][e.target.name] = e.target.files[0];
    } else {
      data[index][e.target.name] = e.target.value;
    }

    setAchievments(data);
  };

  const addAchievment = () => {
    let newAchievment = { name: "", year: "", file: null };

    setAchievments([...achievments, newAchievment]);
  };

  const removeAchievment = (i) => {
    let newAchievment = [...achievments];
    newAchievment.splice(i, 1);
    setAchievments(newAchievment);
  };

  // Work Experience Fields
  const [work, setWork] = useState([{ name: "", year: "", company: "", location: "" }]);

  const onWorkChange = (e, index) => {
    let data = [...work];
    data[index][e.target.name] = e.target.value;

    setWork(data);
  };

  const addWork = () => {
    let newWork = { name: "", year: "", company: "", location: "" };

    setWork([...work, newWork]);
  };

  const removeWork = (i) => {
    let newWork = [...work];
    newWork.splice(i, 1);
    setWork(newWork);
  };

  // Education Fields
  const [education, setEducation] = useState([{ name: "", study: "", year: "" }]);

  const onEducationChange = (e, index) => {
    let data = [...education];
    data[index][e.target.name] = e.target.value;

    setEducation(data);
  };

  const addEducation = () => {
    let newEducation = { name: "", study: "", year: "" };

    setEducation([...education, newEducation]);
  };

  const removeEducation = (i) => {
    let newEducation = [...education];
    newEducation.splice(i, 1);
    setEducation(newEducation);
  };

  // Organization Fields
  const [organization, setOrganization] = useState([{ name: "", year: "", role: "" }]);

  const onOrganizationChange = (e, index) => {
    let data = [...organization];
    data[index][e.target.name] = e.target.value;

    setOrganization(data);
  };

  const addOrganization = () => {
    let newOrganization = { name: "", year: "", role: "" };

    setOrganization([...organization, newOrganization]);
  };

  const removeOrganization = (i) => {
    let newOrganization = [...organization];
    newOrganization.splice(i, 1);
    setOrganization(newOrganization);
  };

  // Projects Fields
  const [projects, setProjects] = useState([{ file: null, name: "", year: "" }]);

  const onProjectChange = (e, index) => {
    let data = [...projects];
    if (e.target.name === "file") {
      data[index][e.target.name] = e.target.files[0];
    } else {
      data[index][e.target.name] = e.target.value;
    }

    setProjects(data);
  };

  const addProject = () => {
    let newProject = { file: null, name: "", year: "" };

    setProjects([...projects, newProject]);
  };

  const removeProject = (i) => {
    let newProject = [...projects];
    newProject.splice(i, 1);
    setProjects(newProject);
  };

  // Custome Input File Photo Profile
  const fileInput = useRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  // Custome Input File Photo Profile
  const fileInputAchievment = useRef([]);

  const handleClickAchievment = (i) => {
    fileInputAchievment.current[i].click();
  };

  // Custome Input File Photo Profile
  const fileInputProject = useRef([]);

  const handleClickProject = (i) => {
    fileInputProject.current[i].click();
  };

  // File Reader
  useEffect(() => {
    const photoURL = selectedPhoto && URL.createObjectURL(selectedPhoto);
    setPreviewPhoto(photoURL);
  }, [selectedPhoto]);

  // Modal
  const [show, setShow] = useState(false);
  const [showBg, setShowBg] = useState(false);

  return (
    <div>
      <Container className="mb-5">
        <Form>
          <div className="d-block mb-4 text-center">
            <img src={selectedBg} alt="" className="d-block mb-3 mx-auto" />
            <Button variant="outline-primary px-5" onClick={() => setShowBg(true)}>
              Choose Background
            </Button>
          </div>

          <Form.Label>Photo Profile</Form.Label>
          <div className="d-flex mb-4" onClick={handleClick}>
            <div className="rounded-circle shadow" style={{ cursor: "pointer", width: "150px", height: "150px" }}>
              {previewPhoto ? (
                <img
                  src={previewPhoto}
                  alt="Preview"
                  className="rounded-circle p-1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onLoad={() => URL.revokeObjectURL(previewPhoto)}
                />
              ) : (
                <div className="text-center text-black-50" style={{ marginTop: "30px" }}>
                  <AiOutlineCloudUpload size="50px" />
                  <p>Upload Photo</p>
                </div>
              )}
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

          <Form.Label>Achievments</Form.Label>
          {achievments?.map((item, index) => (
            <div key={index}>
              {index ? <hr className="mb-4" /> : null}
              <div>
                {!item.file && (
                  <div
                    className="border rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickAchievment(index)}
                  >
                    <div className="text-center text-black-50" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                      <AiOutlineCloudUpload size="90px" />
                      <p>Upload Your Document</p>
                    </div>
                  </div>
                )}

                {item.file && (
                  <div className="border rounded d-flex">
                    <div className="d-flex p-2">
                      <BsFillFileEarmarkFill className="my-auto me-2" size="30" />
                      <div>
                        <p className="m-0">{item.file.name}</p>
                        <p className="m-0 text-black-50">{bytesConverter(item.file.size)}</p>
                      </div>
                    </div>

                    <div className="p-2 my-auto ms-auto">
                      <Button
                        onClick={() =>
                          setAchievments(achievments.map((item, i) => (i === index ? { ...item, file: null } : item)))
                        }
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                <Form.Group className="mb-4">
                  <Form.Control
                    type="file"
                    name="file"
                    className="d-none"
                    ref={(el) => (fileInputAchievment.current[index] = el)}
                    onChange={(e) => onAchievmentChange(e, index)}
                  />
                </Form.Group>
              </div>

              <Row className="mb-4">
                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Achievments"
                    value={item.name}
                    onChange={(e) => onAchievmentChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={2}>
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => onAchievmentChange(e, index)}
                  />
                </Form.Group>

                {index ? (
                  <Form.Group as={Col} lg={4}>
                    <Button onClick={() => removeAchievment(index)}>Remove</Button>
                  </Form.Group>
                ) : null}
              </Row>
            </div>
          ))}

          <Button variant="outline-primary mb-4 d-block" onClick={addAchievment}>
            Add More +
          </Button>

          <Form.Label>Work Experience</Form.Label>
          {work?.map((item, index) => (
            <div key={index}>
              {index ? <hr className="mb-4" /> : null}
              <Row className="mb-4 gy-4">
                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Job Title"
                    value={item.name}
                    onChange={(e) => onWorkChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3}>
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="Year You Started and Left"
                    value={item.year}
                    onChange={(e) => onWorkChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={item.company}
                    onChange={(e) => onWorkChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3}>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Location Your Company"
                    value={item.location}
                    onChange={(e) => onWorkChange(e, index)}
                  />
                </Form.Group>

                {index ? (
                  <Form.Group as={Col} lg={3}>
                    <Button onClick={() => removeWork(index)}>Remove</Button>
                  </Form.Group>
                ) : null}
              </Row>
            </div>
          ))}

          <Button variant="outline-primary mb-4 d-block" onClick={addWork}>
            Add More +
          </Button>

          <Form.Label>Education Experience</Form.Label>
          {education?.map((item, index) => (
            <div key={index}>
              {index ? <hr className="mb-4" /> : null}
              <Row className="mb-4 gy-4">
                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Institution Name"
                    value={item.name}
                    onChange={(e) => onEducationChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3}>
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="Year of Graduation"
                    value={item.year}
                    onChange={(e) => onEducationChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="study"
                    placeholder="Field of Study"
                    value={item.study}
                    onChange={(e) => onEducationChange(e, index)}
                  />
                </Form.Group>

                {index ? (
                  <Form.Group as={Col} lg={3}>
                    <Button onClick={() => removeEducation(index)}>Remove</Button>
                  </Form.Group>
                ) : null}
              </Row>
            </div>
          ))}

          <Button variant="outline-primary mb-4 d-block" onClick={addEducation}>
            Add More +
          </Button>

          <Form.Label>Organization</Form.Label>
          {organization?.map((item, index) => (
            <div key={index}>
              {index ? <hr className="mb-4" /> : null}
              <Row className="mb-4 gy-4">
                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Organization Name"
                    value={item.name}
                    onChange={(e) => onOrganizationChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3}>
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => onOrganizationChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="role"
                    placeholder="Role and Responsibilies"
                    value={item.role}
                    onChange={(e) => onOrganizationChange(e, index)}
                  />
                </Form.Group>

                {index ? (
                  <Form.Group as={Col} lg={3}>
                    <Button onClick={() => removeOrganization(index)}>Remove</Button>
                  </Form.Group>
                ) : null}
              </Row>
            </div>
          ))}

          <Button variant="outline-primary mb-4 d-block" onClick={addOrganization}>
            Add More +
          </Button>

          <Form.Label>Upload Your Supporting Works or Portfolio</Form.Label>
          {projects?.map((item, index) => (
            <div key={index}>
              {index ? <hr className="mb-4" /> : null}
              <div>
                {!item.file && (
                  <div
                    className="border rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickProject(index)}
                  >
                    <div className="text-center text-black-50" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                      <AiOutlineCloudUpload size="90px" />
                      <p>Upload Your Document</p>
                    </div>
                  </div>
                )}

                {item.file && (
                  <div className="border rounded d-flex">
                    <div className="d-flex p-2">
                      <BsFillFileEarmarkFill className="my-auto me-2" size="30" />
                      <div>
                        <p className="m-0">{item.file.name}</p>
                        <p className="m-0 text-black-50">{bytesConverter(item.file.size)}</p>
                      </div>
                    </div>

                    <div className="p-2 my-auto ms-auto">
                      <Button
                        onClick={() =>
                          setProjects(projects.map((item, i) => (i === index ? { ...item, file: null } : item)))
                        }
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                <Form.Group className="mb-4">
                  <Form.Control
                    type="file"
                    name="file"
                    className="d-none"
                    ref={(el) => (fileInputProject.current[index] = el)}
                    onChange={(e) => onProjectChange(e, index)}
                  />
                </Form.Group>
              </div>

              <Row className="mb-4">
                <Form.Group as={Col} lg={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name Document"
                    value={item.name}
                    onChange={(e) => onProjectChange(e, index)}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={2}>
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => onProjectChange(e, index)}
                  />
                </Form.Group>

                {index ? (
                  <Form.Group as={Col} lg={4}>
                    <Button onClick={() => removeProject(index)}>Remove</Button>
                  </Form.Group>
                ) : null}
              </Row>
            </div>
          ))}

          <Button variant="outline-primary mb-4 d-block" onClick={addProject}>
            Add More +
          </Button>
        </Form>

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
        email={email}
        phone={phone}
        socMed={socMed}
      />
      <ModalBg show={showBg} setShow={setShowBg} selectedBg={selectedBg} onSelectedBg={onSelectedBg} />

      <hr />
      <p className="text-center text-black-50">© 2023 Career Development Center ITG</p>
    </div>
  );
}
