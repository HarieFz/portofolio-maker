import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import Banner from "../../components/user/share/Banner";
import PreviewPortfolio from "./PreviewPortfolio";
import Swal from "sweetalert2";

export default function ListPortfolio() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get Data Portfolio
  const fetchData = async () => {
    const q = query(collection(db, "portofolio"));
    const unsub = onSnapshot(
      q,
      (querySnapshot) => {
        const portfolios = [];
        querySnapshot.forEach((doc) => {
          portfolios.push(doc.data());
        });
        setData(portfolios);
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
        Swal.fire("Something Error!", "Something Error!", "error");
      }
    );

    return unsub;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Modal
  const [show, setShow] = useState(false);
  const [portfolio, setPortfolio] = useState(null);

  const handleShow = (data) => {
    setShow(true);
    setPortfolio(data);
  };

  return (
    <Container>
      <Banner content="Dashboard E-Portfolio CDC" />
      {isLoading && <h2 className="text-center mt-5">Loading...</h2>}
      <Row className="justify-content-md-center gy-4 mb-5">
        {data?.map((data) => (
          <Col lg={5} key={data.user_uid}>
            <Card style={{ border: "none" }}>
              <div className="stupo__wrapper">
                <Card.Img
                  variant="top"
                  src={data.bg}
                  className="rounded"
                  style={{ objectFit: "cover", objectPosition: "bottom", height: "80px" }}
                />
                <div className="stupo__overlay stupo__overlay1 rounded" />
              </div>
              <Card.Body className="d-flex">
                <div className="stupo__round-pict me-4">
                  <img
                    src={data.photo}
                    alt="profile"
                    className="rounded-circle shadow"
                    width="100px"
                    height="100px"
                    style={{ border: "solid 3px #ffffff" }}
                  />
                </div>
                <div>
                  <Card.Title className="m-0">{data?.name}</Card.Title>
                  <Card.Text className="m-0" style={{ fontSize: "14px" }}>
                    {data?.skill}
                  </Card.Text>
                </div>
              </Card.Body>
              <hr className="mx-4 mt-0" style={{ height: "2px", backgroundColor: "#ADB5BD", border: "none" }} />
              <Button onClick={() => handleShow(data)}>Preview Portfolio</Button>
            </Card>
          </Col>
        ))}
        <PreviewPortfolio show={show} setShow={setShow} data={portfolio} />
      </Row>
    </Container>
  );
}
