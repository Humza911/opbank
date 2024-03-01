import moment from "moment";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="my-6">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 text-orange-500">
        <h1 className="text-xl font-bold">Account Details</h1>
        <p>
          Last Login:{" "}
          {moment(user?.lastLogin).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-6 text-white">
        <div className="border border-orange-500 rounded-md bg-orange-500 shadow-md py-4 px-6 w-full sm:w-64 h-44 flex items-center gap-3 justify-center flex-col cursor-pointer transition-all duration-200 ease-in hover:shadow-lg">
          <h1 className="text-xl font-semibold">Balance Available</h1>
          <p className="text-lg">$500,000 AUD</p>
        </div>
        <div className="border border-gray-800 rounded-md bg-gray-800 shadow-md py-4 px-6 w-full sm:w-64 h-44 flex items-center gap-3 justify-center flex-col cursor-pointer transition-all duration-200 ease-in hover:shadow-lg">
          <h1 className="text-xl font-semibold">Pay a bill</h1>
          <FaRegMoneyBillAlt className="text-4xl" />
        </div>
        <div className="border border-gray-800 rounded-md bg-gray-800 shadow-md py-4 px-6 w-full sm:w-64 h-44 flex items-center gap-3 justify-center flex-col cursor-pointer transition-all duration-200 ease-in hover:shadow-lg">
          <h1 className="text-xl font-semibold">Transfer funds</h1>
          <FaMoneyBillTransfer className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
