import { useState } from "react";
import { toast } from "react-toastify";
import useAuthStore from "../store/AuthStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import usePostStore from "../store/Posts";

const UsePostComment = () => {
  const { user } = useAuthStore();
  const { addcomment } = usePostStore();
  const [isCommenting, setIsCommenting] = useState(false);
  const handlePostComment = async (postid, comment) => {
    setIsCommenting(true);
    if (!user) {
      toast.info("You must be Loggged in to comment a post");
      return;
    } else if (comment === "") {
      toast.info("Comment message can't be empty");
      setIsCommenting(false);
      return;
    }
    const newComment = {
      comment: comment,
      createdBy: user.uid,
      postId: postid,
      createdAt: Date.now(),
    };
    try {
      // update post
      const PostRef = doc(firestore, "posts", postid);
      await updateDoc(PostRef, {
        comments: arrayUnion(newComment),
      });
      addcomment(postid, newComment);
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setIsCommenting(false);
    }
  };
  return { handlePostComment, isCommenting };
};
export default UsePostComment;
