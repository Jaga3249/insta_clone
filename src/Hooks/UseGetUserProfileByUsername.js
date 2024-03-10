import { useState } from "react";
import { UserProfileStore } from "../store/UserProfileStore";

const UseGetUserProfileByUsername = () => {
  const [loading, setLoading] = useState(false);
  const { userProfile, setUserProfile } = UserProfileStore();

  const getUserProfileDetail = async () => {};
};
export default UseGetUserProfileByUsername;
