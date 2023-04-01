import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

export const fetchDataById = async (path, id, setData, setIsLoading) => {
  const unsub = onSnapshot(
    doc(db, path, id),
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
