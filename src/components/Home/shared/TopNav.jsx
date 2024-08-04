import { MdLogout } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { useAuth } from "../../../custom hooks/useAuth";
import toast from "react-hot-toast";
const TopNav = () => {
  const { user, logOut } = useAuth();
  const { photoURL, email, displayName } = user || {};
  // logout functionality
  const handleLogout = () => {
    logOut().then(toast.success("Logged Out Successfully"));
  };

  return (
    <div className="bg-white w-full p-5 md:flex justify-between hidden">
      <div className="flex gap-2">
        <img
          src={photoURL}
          alt={`image of `}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{displayName}</p>
          <p className="text-xs font-medium text-gray">{email}</p>
        </div>
      </div>
      <div className="flex gap-5">
        <FaRegBell className="border-2 border-[#FFECEA] rounded-full w-10 h-10 p-2" />
        <button
          onClick={handleLogout}
          className="text-red inline-flex gap-2 justify-center items-center font-medium border-l border-l-lightGray pl-4"
        >
          Log Out
          <MdLogout className="bg-[#FFECEA] rounded-full w-10 h-10 p-2" />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
