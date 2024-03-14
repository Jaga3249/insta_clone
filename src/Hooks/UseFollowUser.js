import { useEffect } from "react";
import { useState } from "react";
import useAuthStore from "../store/AuthStore";

const UseFollowUser = (userId) => {
  const { user } = useAuthStore();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    if (user) {
      const isFollowing = user.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [isFollowing, userId]);
};
export default UseFollowUser;
