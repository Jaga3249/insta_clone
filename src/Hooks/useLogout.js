import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBase";
import { toast } from "react-toastify";
import UseDeleteDocumentFromFirestore from "./UseDeleteDocumentFromFirestore";
import useAuthStore from "../store/AuthStore";

const UseLogOut = () => {
  const removeUserFromStore = useAuthStore((state) => state.clearStorage);
  const { removeDocument } = UseDeleteDocumentFromFirestore();
  const handleLogout = async (setLoading) => {
    const userToBeLogout = JSON.parse(localStorage.getItem("loginUserInfo"));

    try {
      setLoading(true);
      const res = await signOut(auth);
      removeDocument(userToBeLogout.uid);
      // localStorage.removeItem("loginUserInfo");
      removeUserFromStore("loginUserInfo");
      setLoading(false);
      toast.success("user logout sucessfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { handleLogout };
};
export default UseLogOut;
