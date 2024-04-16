import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { firestore } from "../firebase/fireBase";

const UseLikePost = (post) => {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(post?.likes?.length);
  const [isLiked, setIsLiked] = useState(post?.likes?.includes(user.uid));

  const handleLike = async () => {
    console.log("cliked");
    if (loading) return;
    if (!user) {
      toast.info("user must be loggin to like a post");
      return;
    }
    setLoading(true);

    try {
      //post ref
      const postRef = doc(firestore, "posts", post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });
      setIsLiked(!isLiked);
      isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return { likes, isLiked, loading, handleLike };
};
export default UseLikePost;
