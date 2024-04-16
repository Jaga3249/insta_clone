import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { UserProfileStore } from "../store/UserProfileStore";

const UseSearchUser = (username) => {
  const [loading, setLoading] = useState(false);

  const { setUserProfile } = UserProfileStore();

  const getUserProfile = async () => {
    setLoading(true);
    if (username === "") {
      setLoading(false);
      return;
    }

    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setUserProfile(null);
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

  useEffect(() => {
    if (username) {
      getUserProfile();
    }
  }, [username]);

  return { loading, getUserProfile };
};
export default UseSearchUser;
