import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};
export default App;
