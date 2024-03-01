import { MdSupportAgent } from "react-icons/md";
import Button from "../components/Shared/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OPTIONS = [
  {
    id: 1,
    text: "I need help with logging in",
    response: "Please follow the steps below",
    steps: [
      "Step 1: Click on the login button",
      "Step 2: Enter your username and password",
      "Step 3: Click on the login button",
    ],
  },
  {
    id: 2,
    text: "I forgot my password",
    response: "Please contact our support team at 123-456-7890",
    steps: [],
  },
  {
    id: 3,
    text: "I want to pay my bill",
    response: "Please follow the steps below",
    steps: [
      "Step 1: Click on the billing button",
      "Step 2: Enter your credit card information",
      "Step 3: Click on the pay button",
    ],
  },
  {
    id: 4,
    text: "I want to view my balance",
    response: "Please follow the steps below",
    steps: [
      "Step 1: Click on the billing button",
      "Step 2: Click on the view balance button",
    ],
  },
];
const ChatBotPage = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center w-full text-center">
      <div className="border border-gray-300 py-6 px-8 rounded-md">
        <div className="flex items-center gap-3 justify-center">
          <MdSupportAgent className="text-3xl" />
          <h1 className="text-lg font-semibold">Hi, how can I help you?</h1>
        </div>
        <p className="text-center my-4">Please select an option</p>
        {!selectedOption && (
          <div className="flex flex-col gap-3">
            {OPTIONS.map((option) => (
              <button
                key={option.id}
                className="border border-gray-300 py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-200"
                onClick={() => setSelectedOption(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
        {selectedOption && (
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{selectedOption.response}</p>
            {selectedOption.steps.length > 0 && (
              <div className="flex flex-col gap-3">
                {selectedOption.steps.map((step, index) => (
                  <p key={index}>{step}</p>
                ))}
              </div>
            )}
            <button
              className="border border-gray-300 py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-200"
              onClick={() => setSelectedOption(null)}
            >
              Go Back
            </button>
          </div>
        )}
      </div>
      <Button type="button" onClick={() => navigate("/")}>
        Close ChatBot
      </Button>
    </div>
  );
};

export default ChatBotPage;
