import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";

const UseSavePosts = (post) => {
  const { user, setuser } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    if (user) {
      const alreadySave = user.savePost.includes(post.id);
      setIsAvailable(alreadySave);
    }
  }, [post.id, user]);
  const handlesavePost = async () => {
    setLoading(true);
    try {
      const userRef = doc(firestore, "users", user.uid);

      //update doc
      const updatedDoc = {
        ...user,
        savePost: isAvailable ? arrayRemove(post.id) : arrayUnion(post.id),
      };
      //update user document
      await updateDoc(userRef, updatedDoc);
      localStorage.setItem("user_info", JSON.stringify(updateDoc));
      setuser(updatedDoc);
      isAvailable
        ? toast.info("Save post removed from user")
        : toast.info("Post save sucessfully");
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handlesavePost, loading, isAvailable };
};
export default UseSavePosts;
