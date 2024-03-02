import React from 'react'
import { auth } from '../firebase/fireBase';
import { useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useAuthStore from '../store/AuthStore';

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const logoutUser=useAuthStore((state)=>state.logout)
    // logout user
    const handleLogout = async () => {
        await signOut();
        localStorage.removeItem("user_info");
        logoutUser();
        toast.info("user Logout Sucessfully")
    }
    return {
        isLoggingOut, error,handleLogout
  }
}

export default useLogout