import { useNavigate } from "react-router-dom";
import Button from "../components/Shared/Button";

const RegisterSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-10">
      <h1 className="text-3xl font-semibold">Register Account</h1>
      <p className="text-lg mt-4">
        Your account has been registered successfully.
      </p>
      <Button
        className="mt-8"
        variant="primary"
        onClick={() => navigate("/dashboard")}
      >
        Take me to my account
      </Button>
    </div>
  );
};

export default RegisterSuccessPage;
