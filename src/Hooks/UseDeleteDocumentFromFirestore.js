import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";

const UseDeleteDocumentFromFirestore = () => {
  const removeDocument = async (uid) => {
    const docRef = doc(firestore, "login_user", uid);
    await deleteDoc(docRef);
  };
  return { removeDocument };
};
export default UseDeleteDocumentFromFirestore;
