import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { ToastContainer } from "react-toastify";
import PageLayout from "./Layout/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

import useAuthStore from "./store/AuthStore";

const App = () => {
  const authuser = useAuthStore((state) => state.user);

  return (
    <PageLayout>
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={authuser ? <HomePage /> : <Navigate to={"/auth"} />}
        />
        <Route
          path="/auth"
          element={!authuser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};
export default App;
