import React from "react";
import { auth, firestore } from "../firebase/fireBase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useUserLogin = () => {
  const navigte = useNavigate();
  const [signInWithEmailAndPassword, error, loading, user, additionalUserInfo] =
    useSignInWithEmailAndPassword(auth);

  // console.log(loading);

  const signinUser = async (logindata, initialState, setLoginData) => {
    if (!logindata.email || !logindata.password) {
      toast.info("Fill the All Fields");

      return;
    }
    try {
      const { user } = await signInWithEmailAndPassword(
        logindata.email,
        logindata.password
      );
      if (!user && error) {
        toast.info("Invalid Credential");

        return;
      } else if (user) {
        const loginUserDoc = {
          acessToken: user.accessToken,
          email: logindata.email,
          uid: user.uid,
          loginTime: user.metadata.lastSignInTime,
        };
        await setDoc(doc(firestore, "login_user", user.uid), loginUserDoc);
        localStorage.setItem("login_data", loginUserDoc);

        setLoginData(initialState);
        navigte("/");
        toast.success("user login sucessfully");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };
  return { signinUser, error, user, loading };
};

export default useUserLogin;
