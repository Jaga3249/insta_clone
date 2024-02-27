import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/fireBase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword,  loading, error] =useCreateUserWithEmailAndPassword(auth);
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
      !signUpDetail.fullName ||
      !signUpDetail.userName
    ) {
      toast.info("Fill the All Fields");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        signUpDetail.email,
        signUpDetail.password
        );
        
        console.log("newUser",newUser)
      if (!newUser && error) {
        toast.error("invalid credential");
        console.log(error);
        return;
      } else if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: signUpDetail.email,
          userName: signUpDetail.userName,
          fullName: signUpDetail.fullName,
          bio: "",
          profilepicurl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user_info", JSON.stringify(userDoc));
        setSignUpDetail(initialState);
        setIsLogin(true);
        toast.success("user signup sucessfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  return {
    signUp,
    loading,
    error,
  };
};
export default useSignupWithEmailAndPassword;
