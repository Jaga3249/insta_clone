import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

import useAuthStore from "../store/AuthStore";

const UseSignupWithEmailAndPassword = () => {
  const { login } = useAuthStore();
  const createUser = async (
    signUpDetail,
    setSignUpDetail,
    setLoading,

    initialState
  ) => {
    setLoading(true);
    if (
      signUpDetail.fullName === "" ||
      signUpDetail.userName === "" ||
      signUpDetail.email === "" ||
      signUpDetail.password === "" ||
      signUpDetail.confirmPassword === ""
    ) {
      toast.info("Fill the all fields", {
        onClose: () => {
          setLoading(false);
        },
      });

      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        signUpDetail.email,
        signUpDetail.password
      );
      if (res) {
        const signUpDoc = {
          uid: res?.user?.uid,
          fullName: signUpDetail.fullName,
          email: signUpDetail.email,
          password: signUpDetail.password,
          bio: "",
          profilePicUrl: "",
          followers: [],
          following: [],
          posts: [],
          savePost: [],
          username: signUpDetail.userName,
          createdAt: res?.user?.metadata.creationTime,
        };
        // add document
        await setDoc(doc(firestore, "users", res?.user?.uid), signUpDoc);
        localStorage.setItem("user_info", JSON.stringify(signUpDoc));

        setSignUpDetail(initialState);
        login(signUpDoc);
      }
      setLoading(false);
      toast.success("user signup sucessfully");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        toast.info("Please choose strong password");
      } else if (error.code === "auth/email-already-in-use") {
        toast.info("email is already exist");
      } else if (error.code === "auth/invalid-email") {
        toast.info("please enter valid email");
      }
      setLoading(false);
      // toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  return { createUser };
};
export default UseSignupWithEmailAndPassword;
