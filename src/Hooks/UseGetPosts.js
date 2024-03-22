import { useEffect, useState } from "react";
import { UserProfileStore } from "../store/UserProfileStore";
import usePostStore from "../store/Posts";
import { toast } from "react-toastify";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";

const UseGetPosts = () => {
  const [isloading, setIsLoading] = useState(false);
  const { userProfile } = UserProfileStore();
  const { post, setPost } = usePostStore();
  const GetPosts = async () => {
    setIsLoading(true);
    if (!userProfile) {
      return;
    }
    try {
      let posts = [];
      const q = query(
        collection(firestore, "posts"),
        where("createdBy", "==", userProfile.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });

      posts.sort((a, b) => b.createdAt - a.createdAt);

      setPost(posts);
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    GetPosts();
  }, [setPost, userProfile]);

  return { isloading, post };
};
export default UseGetPosts;
