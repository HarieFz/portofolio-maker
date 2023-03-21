import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import ViewPortofolio from "./ViewPortofolio";

export default function PreviewPortfolio({ data, setShow, show }) {
  const [isLoading, setIsLoading] = useState(false);

  const eksportPDF = () => {
    setIsLoading(true);
    htmlToImage.toCanvas(document.getElementById("pdf"), { quality: 1 }).then(function (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
      pdf.addImage(dataUrl, "PNG", 0, 0, canvas.width, canvas.height, null, "FAST");
      pdf.save("portofolio.pdf");
      setIsLoading(false);
    });
  };

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Preview Portofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body id="pdf">
        <ViewPortofolio data={data} />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex mx-auto">
          <Button className="px-5" onClick={eksportPDF} disabled={isLoading}>
            {isLoading ? (
              "Downloading..."
            ) : (
              <>
                <BsDownload className="me-2" />
                Eksport PDF
              </>
            )}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
