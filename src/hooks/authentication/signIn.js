import Swal from "sweetalert2";
import { auth, db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (email, password, path, Auth, navigate, to, setIsLoading) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const q = query(collection(db, path), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc?.docs[0]?.data();
      Auth(user, data);
      Swal.fire({
        text: "Success!",
        title: "Login Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsLoading(false);
      navigate(to);
    })
    .catch((err) => {
      setIsLoading(false);
      console.error(err);
      if (err.code === "auth/user-not-found") {
        return Swal.fire("Something Error!", "User not found!", "error");
      }
      Swal.fire("Something Error!", "Please check again Email and Password", "error");
    });
};
