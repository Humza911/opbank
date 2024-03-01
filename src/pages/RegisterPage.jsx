import { useNavigate } from "react-router-dom";
import Button from "../components/Shared/Button";
import { toast } from "react-toastify";
import moment from "moment/moment";
import axios from "axios";
import { useDispatch } from "react-redux";
import { onLogin } from "../features/auth/authSlice";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const RECAPTCHA_KEY = import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY;

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [captchaValue, setCaptchaValue] = useState(null);

  const createUserNameFromEmail = (email) => {
    const emailParts = email.split("@");
    const username = emailParts[0];
    return username;
  };

  const registerAccountHandler = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      return toast.error("Please complete the captcha");
    }
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    const dateOfBirth = e.target.dateOfBirth.value;
    if (!email || !password || !address || !dateOfBirth) {
      return toast.error("Please fill in all fields");
    }
    if (password.length < 6) {
      return toast.error("Please enter a password with at least 6 characters");
    }
    //we need to check if the user is 60 years or older
    const age = moment().diff(dateOfBirth, "years");
    if (age < 60) {
      return toast.error("You must be 60 years or older to register");
    }
    const username = createUserNameFromEmail(email);
    try {
      const response = await axios.post(`${BACKEND_URL}/users/register`, {
        username,
        email,
        password,
        address,
        dateOfBirth,
      });
      if (response) {
        const data = response.data;
        toast.success("Account created successfully");
        dispatch(
          onLogin({
            user: data.user,
            token: data.user.token,
          })
        );
        navigate("/register-success");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="min-w-[35vw]">
        <h1 className="text-3xl font-semibold">Register Account</h1>
        <p className="text-lg mt-4">
          Provide your details below to create an account
        </p>
        <form className="my-8" onSubmit={registerAccountHandler}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-2"
                placeholder="examplemail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-lg">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-md p-2"
                placeholder="mybankpassword"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-lg">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="border border-gray-300 rounded-md p-2"
                placeholder="Steel street, Newcastle NSW"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dateOfBirth" className="text-lg">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <p className="my-6 text-sm">
            You must be 60 years or older to register an account with us.
          </p>
          <ReCAPTCHA
            sitekey={RECAPTCHA_KEY}
            onChange={(value) => setCaptchaValue(value)}
          />
          <div className="flex flex-col gap-4 mt-6">
            <Button type="submit">Register my account</Button>
            <Button
              type="submit"
              variant="secondary"
              onClick={() => navigate("/signin")}
            >
              Go Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
