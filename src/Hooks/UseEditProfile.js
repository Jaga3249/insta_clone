import { useState } from "react";
import useAuthStore from "../store/AuthStore";
import { firestore, storage } from "../firebase/fireBase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { UserProfileStore } from "../store/UserProfileStore";
import { toast } from "react-toastify";

const UseEditProfile = () => {
  const { user, setuser } = useAuthStore();
  const { setUserProfile } = UserProfileStore();

  const [isUpdating, setIsUpdating] = useState(false);
  const editProfile = async (profileEditData, selectedFile) => {
    if (isUpdating || !user) return;
    setIsUpdating(true);
    const storageRef = ref(storage, `profilePic/${user.uid}`);
    const userDoc = doc(firestore, "users", user.uid);

    let url;

    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        url = await getDownloadURL(ref(storage, `profilePic/${user.uid}`));
      }
      const updatedUser = {
        ...user,
        fullName: profileEditData.fullName || user.fullName,
        username: profileEditData.userName || user.username,
        bio: profileEditData.bio || user.bio,
        profilePicUrl: url || user.profilePicUrl,
      };

      await updateDoc(userDoc, updatedUser);

      localStorage.setItem("user_info", JSON.stringify(updatedUser));
      setuser(updatedUser);
      setUserProfile(updatedUser);
    } catch (error) {
      console.log(error);
      toast.info("Something Went Wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  return { editProfile, isUpdating };
};
export default UseEditProfile;
