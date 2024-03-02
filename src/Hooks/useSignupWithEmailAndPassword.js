import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {  auth, firestore } from "../firebase/fireBase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, error,loading,user] = useCreateUserWithEmailAndPassword(auth);

  // console.log("loading", loading);
  // const loginuser = useAuthStore((state) => (state.login))
  // console.log("loginuser",loginuser)
  // const logout=useAuthStore((state)=>(state.logout))
// user signup 
  const signUp = async (
    signUpDetail,
    setSignUpDetail,
    initialState,
    setIsLogin
  ) => {
    
    if (
      !signUpDetail.email ||
      !signUpDetail.password ||
      !signUpDetail.fullName 
     
    ) {
      toast.info("Fill the All Fields");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        signUpDetail.email,
        signUpDetail.password
      );
      
      if (!newUser && error) {
        
        toast.error("invalid credential");
        
        return;
      } else if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: signUpDetail.email,
          fullName: signUpDetail.fullName,
          bio: "",
          profilepicurl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "Signup_users", newUser.user.uid), userDoc);
        // localStorage.setItem("user_info", JSON.stringify(userDoc));
        // loginuser(userDoc)

        setSignUpDetail(initialState);
        setIsLogin(true);
        toast.success("user signup sucessfully");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something Went Wrong");
    }
  };
  return {
    signUp,
    loading,
    error,
    user
  };
};
export default useSignupWithEmailAndPassword;
