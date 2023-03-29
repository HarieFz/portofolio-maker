import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { db } from "../../../config/firebase";

export default function ModalBg({ show, setShow, selectedBg, onSelectedBg }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get Data Portfolio
  const fetchData = async () => {
    const q = query(collection(db, "background"));
    const unsub = onSnapshot(
      q,
      (querySnapshot) => {
        const backgrounds = [];
        querySnapshot.forEach((doc) => {
          backgrounds.push(doc.data());
        });
        setData(backgrounds);
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
