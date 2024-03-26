import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";

const UseGetUserProfileById = (userid) => {
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const getUserProfile = async () => {
    setLoading(true);
    try {
      // user reference
      const userRef = doc(firestore, "users", userid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setUserProfile(userDoc.data());
      }
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, [userid]);
  return { userProfile, loading };
};
export default UseGetUserProfileById;
