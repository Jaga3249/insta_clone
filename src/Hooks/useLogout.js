import React from 'react'
import { auth } from '../firebase/fireBase';
import { useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    // logout user
    const handleLogout = async () => {
        await signOut();
        localStorage.removeItem("user_info");
        toast.info("user Logout Sucessfully")
    }
    return {
        isLoggingOut, error,handleLogout
  }
}

export default useLogout