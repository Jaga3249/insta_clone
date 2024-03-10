import { create } from "zustand";

const useAuthStore = create((Set) => {
  const storedUser = JSON.parse(localStorage.getItem("user_info"));

  return {
    user: storedUser,
    login: (user) => Set({ user }),
    logout: () => Set({ user: null }),
    setuser: () => Set({ user }),
    clearStorage: () => {
      localStorage.removeItem("user_info");
      Set({ user: null });
    },
  };
});

export default useAuthStore;
