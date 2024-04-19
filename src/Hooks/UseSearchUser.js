import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";

const UseSearchUser = (username) => {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState(username);
  const [searchUserProfile, setSearchUserProfile] = useState(null);

  const getUserProfile = async (searchItem) => {
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
        setSearchUserProfile(null);
        return;
      }

      querySnapshot.forEach((doc) => {
        setSearchUserProfile(doc.data());
      });
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setSearchItem(username);
  }, [username]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getUserProfile(searchItem);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchItem]);

  return { loading, searchUserProfile, setSearchUserProfile };
};
export default UseSearchUser;
