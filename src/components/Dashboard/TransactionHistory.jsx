import { RiHistoryFill } from "react-icons/ri";

const TransactionHistory = () => {
  return (
    <div>
      <div className="border border-gray-300 flex justify-between items-center py-3 px-6 rounded-md bg-white shadow-md">
        <div>
          <h1 className="text-lg">Transaction History | Last 3 transitions</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <RiHistoryFill className="text-2xl" />
            View All
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto my-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ali
              </th>
              <td className="px-6 py-4">Paid</td>
              <td className="px-6 py-4">$1,000</td>
              <td className="px-6 py-4">20 January 2023</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ben
              </th>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4">$700</td>
              <td className="px-6 py-4">02 September 2023</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Haris
              </th>
              <td className="px-6 py-4">Cancelled</td>
              <td className="px-6 py-4">$500</td>
              <td className="px-6 py-4">27 December 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
