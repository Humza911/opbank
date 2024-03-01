import { useEffect, useState } from "react";
import { BsArrowRight, BsBank } from "react-icons/bs";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onLayoutSwitch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [increaseFont, setIncreaseFont] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (increaseFont) {
      document.documentElement.style.setProperty("--font-size", "110%");
    }
    if (!increaseFont) {
      document.documentElement.style.setProperty("--font-size", "100%");
    }
  }, [increaseFont]);

  return (
    <nav
      className={`bg-gray-800 ${
        !isExpanded
          ? "min-w-[30vw] sm:min-w-[25vw] lg:min-w-[15vw]"
          : "min-w-[40vw] md:min-w-[30vw] xl:min-w-[20vw]"
      } h-screen sticky top-0 left-0 shadow-lg text-white flex justify-between items-center flex-col py-10 transition-all duration-500 ease-in-out px-8`}
    >
      <div className={`flex items-center gap-3 ${isExpanded ? "w-full" : ""}`}>
        <button className="bg-purple-400 w-16 h-16 flex justify-center items-center rounded-full">
          <BsBank className="text-4xl" />
        </button>
        {isExpanded && (
          <h1 className="text-2xl">
            <span className="font-bold">OP</span> Bank
          </h1>
        )}
      </div>
      {!isExpanded && (
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <button className="bg-orange-600 h-14 w-14 flex justify-center items-center rounded-lg">
            <BsArrowRight className="text-4xl" />
          </button>
          <p className="mt-3">Expand</p>
        </div>
      )}
      {isExpanded && (
        <div className="w-full">
          <div className="my-10">
            <h1 className="text-lg font-semibold">
              Font Size: {increaseFont ? "40" : "30"}
            </h1>
            <div className="flex gap-6 items-end my-6">
              <div
                className="cursor-pointer"
                onClick={() => setIncreaseFont(false)}
              >
                <button
                  className={`h-12 w-12 flex justify-center items-center rounded-lg text-lg ${
                    increaseFont ? "border border-gray-300" : "bg-orange-600"
                  }`}
                >
                  A
                </button>
                <p className="mt-3">Default</p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setIncreaseFont(true)}
              >
                <button
                  className={`h-16 w-16 flex justify-center items-center rounded-lg text-2xl ${
                    increaseFont ? "bg-orange-600" : "border border-gray-300"
                  }`}
                >
                  A
                </button>
                <p className="mt-3">Large</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Button
              type="button"
              className="bg-orange-600 hover:bg-orange-500 w-full"
              onClick={onLayoutSwitch}
            >
              Switch Layout
            </Button>
            <Button
              type="button"
              className="bg-orange-600 hover:bg-orange-500 w-full"
              onClick={() => navigate("/help")}
            >
              I need help
            </Button>
            <Button
              type="button"
              className="bg-orange-600 hover:bg-orange-500 w-full"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Close panel
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
