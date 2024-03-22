import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import { firestore } from "../firebase/fireBase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

const UseGetSuggestedUsers = () => {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const getSuggestedUsers = async () => {
    setLoading(true);
    try {
      const userRef = collection(firestore, "users");
      const q = query(
        userRef,
        where("uid", "not-in", [user.uid, ...user.following]),
        orderBy("uid"),
        limit(3)
      );
      const querySnapshot = await getDocs(q);

      const users = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        users.push({ ...doc.data(), id: doc.id });
      });
      setSuggestedUsers(users);
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      getSuggestedUsers();
    }
  }, [user]);
  return { loading, suggestedUsers };
};
export default UseGetSuggestedUsers;
