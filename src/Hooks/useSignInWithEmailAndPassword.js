import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import useAuthStore from "../store/AuthStore";
const UseSignInWithEmailAndPassword = () => {
  const { login } = useAuthStore();

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
      let data;
      const userRef = collection(firestore, "users");
      const q = query(userRef, where("email", "==", loginData.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data = doc.data();
      });
      if (data) {
        await signInWithEmailAndPassword(
          auth,
          loginData?.email,
          loginData?.password
        );
        localStorage.setItem("user_info", JSON.stringify(data));
        login(data);
        setLoginData(initialState);
        setLoading(false);
        toast.success("user login sucessfully");
      } else {
        setLoading(false);
        toast.info("user is not exist");
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
