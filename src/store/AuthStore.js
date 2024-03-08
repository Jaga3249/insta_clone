import { create } from "zustand";

const useAuthStore = create((Set) => {
  const storedUser = JSON.parse(localStorage.getItem("loginUserInfo"));

  return {
    user: storedUser,
    login: (user) => Set({ user }),
    logout: () => Set({ user: null }),
    setuser: () => Set({ user }),
    clearStorage: () => {
      localStorage.removeItem("loginUserInfo");
      Set({ user: null });
    },
  };
});

export default useAuthStore;
