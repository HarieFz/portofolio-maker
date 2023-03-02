import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsDownload, BsCheck2 } from "react-icons/bs";
import ViewPortofolio from "./ViewPortofolio";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";

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
  certificates,
}) {
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (!show) {
      setFinish(false);
    }
  }, [show]);

  const onButtonClick = () => {
    htmlToImage.toCanvas(document.getElementById("pdf"), { quality: 1 }).then(function (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
      pdf.addImage(dataUrl, "PNG", 0, 0, canvas.width, canvas.height, null, "FAST");
      pdf.save("portofolio.pdf");
    });
  };

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Preview Portofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body id="pdf">
        <ViewPortofolio
          photo={photo}
          previewPhoto={previewPhoto}
          name={name}
          skill={skill}
          aboutMe={aboutMe}
          achievments={achievments}
          email={email}
          phone={phone}
          socMed={socMed}
          certificates={certificates}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-3 mx-auto">
          <Button variant="outline-primary px-5 py-2" onClick={() => setFinish(true)}>
            <BsCheck2 className="me-2" />
            Finish
          </Button>
          <Button variant="primary px-5 py-2" disabled={!finish} onClick={onButtonClick}>
            <BsDownload className="me-2" />
            Export PDF
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
