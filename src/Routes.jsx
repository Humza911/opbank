import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import Sidebar from "./components/Siderbar/Sidebar.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterSuccessPage from "./pages/RegisterSuccessPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "./features/auth/authSlice";
import ChatBotPage from "./pages/ChatBotPage";

const RoutesComponent = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  //false = left, true = right
  const [layoutPosition, setLayoutPosition] = useState(false);

  useEffect(() => {
    // fetch the user data from the local storage and set it in the redux store
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    if (user && token) {
      // dispatch the action to set the user and token in the redux store
      dispatch(onLogin({ user, token }));
    } else {
      // dispatch the action to remove the user and token from the redux store
      dispatch(onLogout());
    }
  }, [dispatch]);

  return (
    <div
      className={`${
        !layoutPosition ? "flex-row" : "flex-row-reverse"
      } flex gap-4`}
    >
      <Sidebar onLayoutSwitch={() => setLayoutPosition(!layoutPosition)} />
      <Routes>
        {!isLoggedIn && <Route path="/" element={<SignInPage />} />}
        {isLoggedIn && <Route path="/" element={<DashboardPage />} />}
        {!isLoggedIn && <Route path="/signin" element={<SignInPage />} />}
        {!isLoggedIn && <Route path="/register" element={<RegisterPage />} />}
        {isLoggedIn && (
          <Route path="/register-success" element={<RegisterSuccessPage />} />
        )}
        {isLoggedIn && <Route path="/dashboard" element={<DashboardPage />} />}
        <Route path="/help" element={<ChatBotPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
