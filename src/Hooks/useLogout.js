import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBase";
import { toast } from "react-toastify";

import useAuthStore from "../store/AuthStore";

const UseLogOut = () => {
  const { clearStorage } = useAuthStore();

  const handleLogout = async (setLoading) => {
    try {
      setLoading(true);
      const res = await signOut(auth);

      clearStorage();
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
