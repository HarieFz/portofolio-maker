import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

export const register = async (email, password, name, navigate, setIsLoading) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        email,
        role: "user",
      }).then(() => {
        setIsLoading(false);
        navigate("/login");
        Swal.fire({
          text: "Success!",
          title: "Register Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    })
    .catch((err) => {
      setIsLoading(false);
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return Swal.fire("Something Error!", "Email already in use", "error");
      }
      Swal.fire("Something Error!", "Please try again later", "error");
    });
};
