import { useEffect } from "react";
import { useState } from "react";
import useAuthStore from "../store/AuthStore";
import { toast } from "react-toastify";
import { UserProfileStore } from "../store/UserProfileStore";
import { firestore } from "../firebase/fireBase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const UseFollowUser = (userId) => {
  const { user, setuser } = useAuthStore();
  const { userProfile, setUserProfile } = UserProfileStore();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (user) {
      const isFollowing = user.following.includes(userId);

      setIsFollowing(isFollowing);
    }
  }, [user, userId]);

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", user.uid);
      const userToFollowOrUnFollowRef = doc(firestore, "users", userId);
      // current user doc update
      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });
      // searchable user doc update
      await updateDoc(userToFollowOrUnFollowRef, {
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });
      if (isFollowing) {
        // unfollow
        setuser({
          ...user,
          following: user.following.filter((uid) => uid != userId),
        });
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: userProfile?.followers?.filter((uid) => uid != user.uid),
          });
        }

        localStorage.setItem(
          "user_info",
          JSON.stringify({
            ...user,
            following: user.following.filter((uid) => uid != userId),
          })
        );
        setIsFollowing(false);
      } else {
        // follow
        setuser({
          ...user,
          following: [...user.following, userId],
        });
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, user.uid],
          });
        }

        localStorage.setItem(
          "user_info",
          JSON.stringify({
            ...user,
            following: [...user.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      console.log(error.message);

      toast.error("Something Went Wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  return { handleFollowUser, isUpdating, isFollowing };
};
export default UseFollowUser;
