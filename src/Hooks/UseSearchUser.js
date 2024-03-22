import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { UserProfileStore } from "../store/UserProfileStore";

const UseSearchUser = () => {
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  const { userProfile, setUserProfile } = UserProfileStore();
  const loginuser = JSON.parse(localStorage.getItem("user_info"));

  const getUserProfile = async (username) => {
    setLoading(true);
    if (username === "") {
      toast.info("Required field can't be empty", {
        onClose: () => setLoading(false),
      });

      return;
    } else if (username === loginuser.username) {
      toast.info("Login user is not Saerchable", {
        onClose: () => setLoading(false),
      });
      return;
    }

    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        toast.info("user is not found");
        return;
      }

      querySnapshot.forEach((doc) => {
        setUserProfile(doc.data());
      });
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, getUserProfile };
};
export default UseSearchUser;
