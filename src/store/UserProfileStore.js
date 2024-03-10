import { create } from "zustand";
const UserProfileStore = create((Set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => Set({ userProfile }),
}));
export { UserProfileStore };
