import { useEffect, useState } from "react";
import { UserProfileStore } from "../store/UserProfileStore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";

const UseGetUserProfileByFullName = (username) => {
  const [loading, setLoading] = useState(false);
  const { userProfile, setUserProfile } = UserProfileStore();

  const getUserProfileDetail = async () => {
    setLoading(true);
    try {
      let userDoc;
      const q = query(
        collection(firestore, "users"),
        where("fullName", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        userDoc = doc.data();
      });
      if (!userDoc) {
        return setUserProfile(null);
      } else {
        setUserProfile(userDoc);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfileDetail();
  }, [username, setUserProfile]);

  return { userProfile, loading };
};
export default UseGetUserProfileByFullName;
