import { create } from 'zustand'
const useAuthStore = create((Set) => ({
    user: JSON.parse(localStorage.getItem("user_info")),
    login: (user) => Set({ user }),
    logout: () => Set({ user: null }),
    setuser:()=>Set({user})
    
}))

export default useAuthStore;