import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsDownload, BsFiles, BsUpload } from "react-icons/bs";
import { Button, Col, Container, Row } from "react-bootstrap";
import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import Cookies from "js-cookie";
import jsPDF from "jspdf";
import Portofolio from "../../components/user/share/ViewPortofolio";
import Swal from "sweetalert2";

export default function Profile() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEksport, setIsLoadingEksport] = useState(false);

  // Get Data Portfolio
  const uid = Cookies.get("uid");

  const fetchData = async () => {
    const unsub = onSnapshot(
      doc(db, "portofolio", uid),
      (doc) => {
        setData(doc.data());
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
      }
    );

    return unsub;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eksportPDF = () => {
    setIsLoadingEksport(true);
    htmlToImage.toCanvas(document.getElementById("pdf"), { quality: 1 }).then(function (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
      pdf.addImage(dataUrl, "PNG", 0, 0, canvas.width, canvas.height, null, "FAST");
      pdf.save("portofolio.pdf");
      setIsLoadingEksport(false);
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
  });

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(`http://localhost:3000/portofolio/${uid}`);
      Toast.fire({
        title: "Link URL Copied",
        color: "#ffffff",
        background: "#1e1e1e",
        timer: 2000,
      });
    } catch (err) {
      Toast.fire({
        title: "Failed to Copy!",
        timer: 3000,
      });
    }
  };

  return (
    <>
      <hr className="mt-0 mb-4" />
      <Container>
        <Row>
          <Col lg={3}>
            <p className="fw-bold stripe2">
              <span>PROFILE</span>
            </p>
            <div>
              <p className="m-0">Hi, {Cookies.get("name")}</p>
              <p style={{ fontSize: "14px" }}>{Cookies.get("email")}</p>
            </div>
            <Button
              className="d-block text-white mb-3 py-2 w-100"
              onClick={() =>
                navigate("/edit-portfolio", {
                  state: data,
                })
              }
              disabled={data === undefined}
            >
              <BiEdit size={20} className="me-2" />
              Edit Portfolio
            </Button>
            <Button
              variant="outline-primary py-2 w-100"
              onClick={() => copyToClipboard()}
              disabled={data === undefined}
            >
              <BsFiles size={20} className="me-2" />
              Copy Link URL
            </Button>
          </Col>
          <Col lg={9}>
            <p className="fw-bold stripe2">
              <span>PREVIEW PORTOFOLIO</span>
            </p>
            {data === undefined ? (
              <div className="text-center my-5">
                <p>You haven't created a portfolio yet</p>
                <Button as={Link} to="/create-portfolio" className="text-white">
                  + Create Portfolio
                </Button>
              </div>
            ) : (
              <>
                {isLoading ? (
                  <p className="text-center my-5">Loading...</p>
                ) : (
                  <div className="shadow mb-4" id="pdf">
                    <Portofolio data={data} />
                  </div>
                )}

                <div className="d-flex gap-4 mx-5 mb-3">
                  <Button className="py-2 w-100 text-white" as={Link} to={`/portofolio/${uid}`}>
                    <BsUpload className="me-2" />
                    Publish Portofolio
                  </Button>
                  <Button variant="outline-primary py-2 w-100" onClick={eksportPDF} disabled={isLoadingEksport}>
                    {isLoadingEksport ? (
                      "Downloading..."
                    ) : (
                      <>
                        <BsDownload className="me-2" />
                        Eksport PDF
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <hr />
      <p className="text-center text-black-50">© 2023 Career Development Center ITG</p>
    </>
  );
}
