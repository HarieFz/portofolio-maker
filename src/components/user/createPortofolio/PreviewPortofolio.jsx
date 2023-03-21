import { doc, setDoc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsCheck2All } from "react-icons/bs";
import Swal from "sweetalert2";
import { auth, db, storage } from "../../../config/firebase";
import ViewPortofolio from "./ViewPortofolio";

export default function PreviewPortofolio({
  show,
  setShow,
  photo,
  name,
  skill,
  aboutMe,
  achievments,
  email,
  phone,
  socMed,
  certificates,
}) {
  // Current User
  const user = auth.currentUser;

  // Percentage Transfer Data to Storage Cloud
  const [percentPhoto, setPercentPhoto] = useState(0);
  const [percentCertif, setPercentCertif] = useState(0);

  const handlePhoto = async () => {
    if (!photo) return;
    const path = `photos/${photo?.name}`;
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, photo);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setPercentPhoto(percent);
      },
      (err) => console.log(err)
    );

    await uploadTask;

    let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    return downloadURL;
  };

  const handleCertificates = async () => {
    if (!certificates) return;

    var dataCertif = [];

    for (const data of certificates) {
      const path = `certificates/${data?.file?.name}`;
      const storageRef = ref(storage, path);
      const uploadTask = uploadBytesResumable(storageRef, data?.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setPercentCertif(percent);
        },
        (err) => console.log(err)
      );

      await uploadTask;

      let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      dataCertif.push({ file: downloadURL, name: data.name });
    }

    return dataCertif;
  };

  // Create Post
  const createPost = async (photoURL, certifURL) => {
    try {
      await setDoc(doc(db, "portofolio", user.uid), {
        user_uid: user.uid,
        photo: photoURL,
        name,
        skill,
        about_me: aboutMe,
        achievments,
        email,
        phone,
        socmed: socMed,
        certificates: certifURL,
        created_at: Timestamp.now(),
      });
      Swal.fire("Success!", "Created Portfolio is Successfully!", "success");
      setPercentPhoto(0);
      setPercentCertif(0);
    } catch (err) {
      Swal.fire("Something Error!", "Something Error!", "error");
      console.error(err);
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const photoURL = await handlePhoto();
    const certifURL = await handleCertificates();
    createPost(photoURL, certifURL);
  };

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Preview Portofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ViewPortofolio
          photo={photo}
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
        <div className="d-flex mx-auto">
          <Button variant="primary px-5 py-2" onClick={handleSubmit} disabled={percentPhoto + percentCertif / 2 > 0}>
            <BsCheck2All className="me-2" />
            {percentPhoto + percentCertif / 2 > 0 ? `${percentPhoto + percentCertif / 2}` : "Save"}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
