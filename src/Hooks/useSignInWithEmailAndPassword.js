import React from "react";
import { auth, firestore } from "../firebase/fireBase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const useUserLogin = () => {
  const [signInWithEmailAndPassword, loading, error,user] =
    useSignInWithEmailAndPassword(auth);

  const signinUser = async (logindata) => {
    
    
    if (!logindata.email || !logindata.password) {
      toast.info("Fill the All Fields");
      return;
    }
    try {
      const {user} = await signInWithEmailAndPassword(
        logindata.email,
        logindata.password
      );
      if (!user && error) {
        toast.info("Invalid Credential");
        return;
      }
      else if (user) {
        const loginUserDoc = {
          acessToken:user.accessToken,
          email: logindata.email,
          uid:user.uid,
          loginTime:user.metadata.lastSignInTime
          
        }
        await setDoc(doc(firestore, "login_user", user.uid), loginUserDoc);
        localStorage.setItem("login_data", loginUserDoc);
        toast.success("user login sucessfully")
        
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error.message);
    }
  };
  return { signinUser,loading, error };
};

export default useUserLogin;
