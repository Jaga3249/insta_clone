import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const UseSignupWithEmailAndPassword = () => {
  const createUser = async (
    signUpDetail,
    setSignUpDetail,
    setLoading,
    setIsLogin,
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
          fullName: signUpDetail.fullName,
          email: signUpDetail.email,
          userName: signUpDetail.userName,
          uid: res?.user?.uid,
          bio: "",
          profilePicUrl: "",
          followers: [],
          following: [],
          createdAt: res?.user?.metadata.creationTime,
        };
        // add document
        await setDoc(doc(firestore, "signUpUser", res?.user?.uid), signUpDoc);
        setSignUpDetail(initialState);
        setIsLogin(true);
      }
      setLoading(false);
      toast.success("user signup sucessfully");
      // console.log("res", res);
    } catch (error) {
      // console.log(error.code);
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
