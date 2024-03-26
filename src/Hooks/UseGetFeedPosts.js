import { useEffect, useState } from "react";
import usePostStore from "../store/Posts";
import useAuthStore from "../store/AuthStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";

const UseGetFeedPosts = () => {
  const [loading, setLoading] = useState(false);
  const { posts, setPosts } = usePostStore();
  const { user } = useAuthStore();

  const getFeedPosts = async () => {
    setLoading(true);
    if (user.following.length === 0) {
      setLoading(false);
      setPosts([]);
      return;
    }
    try {
      let postDoc = [];
      // post ref that login user is follow
      const postRef = collection(firestore, "posts");
      const q = query(postRef, where("createdBy", "in", user.following));
      //   get post doc
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        postDoc.push({ ...doc.data(), id: doc.id });
      });

      postDoc.sort((a, b) => b.createdAt - a.createdAt);
      setPosts(postDoc);
    } catch (error) {
      console.log(error.message);
      toast.info("Something Wnet Wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFeedPosts();
  }, [user, setPosts]);
  return { posts, loading };
};
export default UseGetFeedPosts;
