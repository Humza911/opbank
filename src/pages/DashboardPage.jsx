import AccountDetails from "../components/Dashboard/AccountDetails";
import TransactionHistory from "../components/Dashboard/TransactionHistory";
import UserTopBar from "../components/Dashboard/UserTopBar";

const DashboardPage = () => {
  return (
    <div className="py-10 px-10 w-full">
      <UserTopBar />
      <AccountDetails />
      <TransactionHistory />
    </div>
  );
};

export default DashboardPage;
