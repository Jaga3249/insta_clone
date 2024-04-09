import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firestore } from "../firebase/fireBase";
import { toast } from "react-toastify";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useAuthStore from "../store/AuthStore";
const UseLoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const { login } = useAuthStore();

  const loginWithGoogle = async (setLoading) => {
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, provider);

      if (res) {
        const userDoc = {
          uid: res?.user?.uid,
          fullName: res?.user?.displayName,
          email: res?.user?.email,
          username: res?.user?.displayName,
          bio: "",
          profilePicUrl: res?.user?.photoURL,
          followers: [],
          following: [],
          posts: [],
          savePost: [],
          loginTime: res?.user?.metadata.creationTime,
        };
        let data;
        const userRef = collection(firestore, "users");
        const q = query(userRef, where("email", "==", res?.user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          data = doc.data();
        });

        if (data) {
          setLoading(false);
          localStorage.setItem("user_info", JSON.stringify(userDoc));
          login(userDoc);
          toast.success("user loggin sucessfully");
          return;
        } else {
          await setDoc(doc(firestore, "users", res.user.uid), userDoc);
          localStorage.setItem("user_info", JSON.stringify(userDoc));
          login(userDoc);
          toast.success("user login sucessfully");
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.info("Something Went Wrong ");
    } finally {
      setLoading(false);
    }
  };
  return { loginWithGoogle };
};
export default UseLoginWithGoogle;
