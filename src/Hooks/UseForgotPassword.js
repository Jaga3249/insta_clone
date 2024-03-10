import { sendPasswordResetEmail } from "firebase/auth";
import { auth, firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import { collection, getDocs, query, where } from "firebase/firestore";
const UseForgotPassword = () => {
  const initialvalue = "";
  const sendResetPasswordMail = async (email, setLoading, setEmail) => {
    setLoading(true);
    if (!email) {
      toast.info("Required field cann't empty");
      setLoading(false);
      return;
    }
    try {
      let data;
      const userRef = collection(firestore, "users");
      const q = query(userRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data = doc.data();
      });
      if (data) {
        await sendPasswordResetEmail(auth, email);
        setLoading(false);
        setEmail(initialvalue);
        toast.success("Password reset email sent successfully");
      } else {
        setLoading(false);
        toast.info("User is not avalaible");
        return;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { sendResetPasswordMail };
};
export default UseForgotPassword;
