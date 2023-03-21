import { doc, Timestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
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
  const user = auth.currentUser;
  const isFile = (input) => "File" in window && input instanceof File;
  const isString = (input) => typeof input === "string";
  const [isLoading, setIsLoading] = useState(false);

  // Container File
  const [filePhoto, setFilePhoto] = useState(null);
  const [fileCertif, setFileCertif] = useState([]);

  // Percentage Transfer Data to Storage Cloud
  const [percentPhoto, setPercentPhoto] = useState(0);
  const [percentCertif, setPercentCertif] = useState(0);

  // Container File URL Storage Cloud
  const [certifURL, setCertifURL] = useState([]);

  // Filter is File or Not
  useEffect(() => {
    if (isFile(photo)) {
      setFilePhoto(photo);
    }

    const isFileCertif = certificates?.filter((item) => {
      return isFile(item.file);
    });

    setFileCertif(isFileCertif);

    const isStringCertif = certificates?.filter((item) => {
      return isString(item.file);
    });

    setCertifURL(isStringCertif);
  }, [certificates, percentCertif, percentPhoto, photo]);

  const handlePhoto = async () => {
    if (!filePhoto) return;
    const path = `photos/${photo?.name}`;
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, filePhoto);

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
    if (!fileCertif) return;

    const dataCertif = [];

    for (const data of fileCertif) {
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

  const createPost = async (photoURL, certifURL) => {
    try {
      await updateDoc(doc(db, "portofolio", user.uid), {
        user_uid: user.uid,
        photo: photoURL ? photoURL : photo,
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
      Swal.fire("Good job!", "Updated Portfolio is Successfully!", "success");
      setFilePhoto(null);
      setFileCertif([]);
      setPercentPhoto(0);
      setPercentCertif(0);
      setCertifURL([]);
      setIsLoading(false);
    } catch (err) {
      Swal.fire("Something Error!", "Something Error!", "error");
      console.error(err);
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const photoURL = await handlePhoto();
    const newCertifURL = await handleCertificates();

    createPost(photoURL, [...certifURL, ...newCertifURL]);
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
          <Button variant="primary px-5 py-2" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <BsCheck2All className="me-2" />
                Save
              </>
            )}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
