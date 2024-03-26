import { useState } from "react";
import useAuthStore from "../store/AuthStore";
import usePostStore from "../store/Posts";
import { UserProfileStore } from "../store/UserProfileStore";
import { toast } from "react-toastify";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase/fireBase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const UseCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const { createPost } = usePostStore();
  const { user } = useAuthStore();
  const { addPost } = UserProfileStore();

  const handleCreatePost = async (
    selectedFile,
    setSelectedFile,
    caption,
    setCaptions
  ) => {
    if (!selectedFile) {
      toast.info("Please select an image");
      return;
    }
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: user.uid,
    };
    try {
      setLoading(true);
      // create posts collection
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);

      // // get the login user document
      const userdocRef = doc(firestore, "users", user.uid);
      // update login user doc
      await updateDoc(userdocRef, {
        posts: arrayUnion(postDocRef.id),
      });
      // // image ref
      const imageRef = ref(storage, `posts/${postDocRef.id}`);
      await uploadString(imageRef, selectedFile, "data_url");

      const downloadUrl = await getDownloadURL(imageRef);
      // update post collection
      await updateDoc(postDocRef, { imageUrl: downloadUrl });
      newPost.imageUrl = downloadUrl;
      createPost({ ...newPost, id: postDocRef.id });
      addPost({ ...newPost, id: postDocRef.id });

      toast.success("Post create sucessfully");
      setSelectedFile(null);
      setCaptions("");
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handleCreatePost, loading };
};
export default UseCreatePost;
