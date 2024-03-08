import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import useAuthStore from "../store/AuthStore";
const UseSignInWithEmailAndPassword = () => {
  const loginUser = useAuthStore((state) => state.login);

  const userLogin = async (
    loginData,
    setLoginData,
    setLoading,
    initialState
  ) => {
    setLoading(true);
    if (loginData.email === "" || loginData.password === "") {
      toast.info("Fill the all fields", {
        onClose: () => {
          setLoading(false);
        },
      });
      return;
    }
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        loginData?.email,
        loginData?.password
      );

      if (res) {
        const login_userDoc = {
          uid: res?.user?.uid,
          email: loginData.email,
          accessToken: res?.user?.accessToken,
          loginTime: res?.user?.metadata?.lastSignInTime,
        };
        await setDoc(doc(firestore, "login_user", res.user.uid), login_userDoc);
        localStorage.setItem("loginUserInfo", JSON.stringify(login_userDoc));
        loginUser(login_userDoc);
        setLoginData(initialState);
        setLoading(false);
        toast.success("user login sucessfully");
      }
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-credential") {
        toast.info("Invalid credential");
        setLoading(false);
      } else if (error.code === "auth/invalid-email") {
        toast.info("Enter valid email");
        setLoading(false);
      } else {
        toast.info("Too many request try after sometime");
      }
    } finally {
      setLoading(false);
    }
  };

  return { userLogin };
};
export default UseSignInWithEmailAndPassword;
