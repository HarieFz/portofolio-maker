import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { fetchAllData } from "../hooks/query/fetchAllData";

export default function ModalBg({ show, setShow, selectedBg, onSelectedBg }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllData("background", setData, setIsLoading);
  }, []);

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Preview Portofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {isLoading && <p>Loading...</p>}
        {data?.map((item, index) => (
          <label key={index} className="bg d-block my-4">
            <input
              id={item.label}
              type="radio"
              value={item.value}
              checked={selectedBg === item.value}
              onChange={onSelectedBg}
            />
            <img src={item.value} alt={item.label} />
          </label>
        ))}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
