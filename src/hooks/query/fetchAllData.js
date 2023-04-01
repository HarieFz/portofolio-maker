import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import Swal from "sweetalert2";

export const fetchAllData = async (path, setData, setIsLoading) => {
  const q = query(collection(db, path));
  const unsub = onSnapshot(
    q,
    (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setData(data);
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
