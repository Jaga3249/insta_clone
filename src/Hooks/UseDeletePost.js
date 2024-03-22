import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";
import { firestore, storage } from "../firebase/fireBase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useAuthStore from "../store/AuthStore";
import { toast } from "react-toastify";
import { UserProfileStore } from "../store/UserProfileStore";

const UseDeletePost = () => {
  const { deletePost, userProfile } = UserProfileStore();
  const [isDelete, setIsDelete] = useState(false);
  const { user } = useAuthStore();
  const handledeletePost = async (post) => {
    try {
      setIsDelete(true);
      // image delete
      const ImageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(ImageRef);
      // delete post
      await deleteDoc(doc(firestore, "posts", post.id));
      // update userprofile
      await deletePost(post.id);
      // update user details
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });
      toast.info("Post deleted sucessfully");
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setIsDelete(true);
    }
  };

  return { handledeletePost, isDelete };
};
export default UseDeletePost;
