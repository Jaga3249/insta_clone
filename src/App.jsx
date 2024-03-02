import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { ToastContainer } from "react-toastify";
import PageLayout from "./Layout/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

import useAuthStore from "./store/AuthStore";

const App = () => {
  // const authuser = useAuthStore((state) => state.user);
  // console.log("authuser", authuser);
  return (
    <PageLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};
export default App;
