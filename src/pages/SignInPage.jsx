import { useNavigate } from "react-router-dom";
import Button from "../components/Shared/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { onLogin } from "../features/auth/authSlice";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const RECAPTCHA_KEY = import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY;

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [captchaValue, setCaptchaValue] = useState(null);

  const validateInput = (email, password) => {
    if (!email || !password) {
      return "Please enter your email and password";
    }
    if (!email.includes("@")) {
      return "Please enter a valid email address";
    }
    if (password.length < 6) {
      return "Please enter a password with at least 6 characters";
    }
    return "";
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      return toast.error("Please complete the captcha");
    }
    const email = e.target.email.value;
    const password = e.target.password.value;
    const validationError = validateInput(email, password);
    if (validationError) {
      return toast.error(validationError);
    }
    try {
      const response = await axios.post(`${BACKEND_URL}/users/authenticate`, {
        email,
        password,
      });
      if (response) {
        const data = response?.data;
        dispatch(
          onLogin({
            user: data,
            token: data.token,
          })
        );
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="min-w-[30vw]">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="text-lg mt-4">Sign in to access your bank account</p>
        <form className="my-8" onSubmit={signInHandler}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="password" className="text-lg">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Enter your password"
            />
          </div>
          <p className="my-6 underline underline-offset-1 cursor-pointer">
            Forgot Password?
          </p>
          <ReCAPTCHA
            sitekey={RECAPTCHA_KEY}
            onChange={(value) => setCaptchaValue(value)}
          />
          <div className="flex flex-col gap-4 mt-6">
            <Button type="submit">Sign In to my account</Button>
            <Button variant="secondary" onClick={() => navigate("/register")}>
              New User? Register here
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
