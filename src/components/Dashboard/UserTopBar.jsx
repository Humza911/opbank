import { IoMdNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserTopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="border border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4 py-3 px-6 rounded-md bg-white shadow-md">
      <div>
        <h1 className="text-lg">Good morning, {user?.username}!</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto gap-6">
        <button className="flex items-center gap-2">
          <IoMdNotificationsOutline className="text-2xl" />
          Notifications
        </button>
        <button className="flex items-center gap-2">
          <AiOutlineSetting className="text-2xl" />
          Settings
        </button>
        <button
          className="flex items-center gap-2"
          onClick={() => {
            dispatch(onLogout());
            navigate("/");
          }}
        >
          <IoMdLogOut className="text-2xl" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserTopBar;
