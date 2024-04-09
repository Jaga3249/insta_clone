import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/fireBase";
import { UserProfileStore } from "../store/UserProfileStore";

const UseSavePosts = (post) => {
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { user, setuser } = useAuthStore();
  const { userProfile, setUserProfile } = UserProfileStore();

  useEffect(() => {
    if (user) {
      const alreadyAvailable = user?.savePost?.includes(post.id);
      setIsSaved(alreadyAvailable);
    }
  }, [user, post.id]);

  const handleSavePost = async () => {
    setLoading(true);
    try {
      // login user reference
      const loginUserRef = doc(firestore, "users", user.uid);
      await updateDoc(loginUserRef, {
        savePost: isSaved ? arrayRemove(post?.id) : arrayUnion(post?.id),
      });
      if (isSaved) {
        //user
        setuser({
          ...user,
          savePost: user.savePost.filter((postid) => postid != post?.id),
        });
        //update userProfile
        setUserProfile({
          ...userProfile,
          savePost: userProfile.savePost.filter((postid) => postid != post?.id),
        });
        console.log("userin", user);
        localStorage.setItem(
          "user_info",
          JSON.stringify({
            ...user,
            savePost: user.savePost.filter((postid) => postid != post?.id),
          })
        );
        setIsSaved(false);
      } else {
        //user
        setuser({
          ...user,
          savePost: [...user?.savePost, post?.id],
        });
        // update userProfile
        setUserProfile({
          ...userProfile,
          savePost: [...userProfile.savePost, post.id],
        });
        // console.log("userin", user);
        localStorage.setItem(
          "user_info",
          JSON.stringify({
            ...user,
            savePost: [...user?.savePost, post?.id],
          })
        );
        setIsSaved(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSavePost, loading, isSaved };
};
export default UseSavePosts;
