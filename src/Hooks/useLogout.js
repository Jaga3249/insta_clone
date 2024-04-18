import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBase";
import { toast } from "react-toastify";

import useAuthStore from "../store/AuthStore";
import { useState } from "react";
import { UserProfileStore } from "../store/UserProfileStore";
import { useNavigate } from "react-router-dom";

const UseLogOut = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { clearStorage } = useAuthStore();
  const { setUserProfile } = UserProfileStore();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await signOut(auth);

      clearStorage();
      setUserProfile(null);
      navigate("/auth");
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
