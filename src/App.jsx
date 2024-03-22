import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { ToastContainer } from "react-toastify";
import PageLayout from "./Layout/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

import useAuthStore from "./store/AuthStore";
import usePostStore from "./store/Posts";

const App = () => {
  const { user } = useAuthStore();

  return (
    <PageLayout>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to={"/auth"} />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};
export default App;
