import { useEffect, useState } from "react";
import { UserProfileStore } from "../store/UserProfileStore";
import usePostStore from "../store/Posts";
import { toast } from "react-toastify";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";

const UseGetPosts = () => {
  const [isloading, setIsLoading] = useState(false);
  const { userProfile } = UserProfileStore();
  const { posts, setPosts } = usePostStore();
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

      setPosts(posts);
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    GetPosts();
  }, [setPosts, userProfile]);

  return { isloading, posts };
};
export default UseGetPosts;
