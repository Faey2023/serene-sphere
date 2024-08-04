// import { GrAppsRounded } from "react-icons/gr";
// import { CiHeart, CiSearch } from "react-icons/ci";
// import { LuSettings, LuUsers } from "react-icons/lu";
// import { TbFileDescription, TbInfoSquare } from "react-icons/tb";
// import { Link } from "react-router-dom";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div
//       className={`fixed z-50 top-0 right-0  bg-white transform ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       } transition-transform duration-300 lg:translate-x-0 w-48 lg:relative lg:top-auto lg:right-auto lg:h-auto`}
//     >
//       <nav className="flex flex-col gap-3 text-center py-5 h-screen border-r border-r-lightGray">
//         <h1 className="text-[#4285F3] text-4xl p-5 uppercase">Logo</h1>
//         <Link
//           to="/"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <GrAppsRounded />
//           Home
//         </Link>
//         <Link
//           to="/listing"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <LuUsers />
//           New Listing
//         </Link>
//         <Link
//           to="/search"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <CiSearch />
//           Search
//         </Link>
//         <Link
//           to="/about"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <TbFileDescription />
//           About
//         </Link>
//         <Link
//           to="/favorites"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <CiHeart />
//           Favorites
//         </Link>
//         <hr className="text-lightGray" />
//         <Link
//           to="/help"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <TbInfoSquare />
//           Help Center
//         </Link>
//         <Link
//           to="/settings"
//           className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
//           onClick={toggleSidebar}
//         >
//           <LuSettings />
//           Settings
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import { GrAppsRounded } from "react-icons/gr";
import { CiHeart, CiSearch } from "react-icons/ci";
import { LuSettings, LuUsers } from "react-icons/lu";
import { TbFileDescription, TbInfoSquare } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAuth } from "../../../custom hooks/useAuth";
import { FaRegBell } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user } = useAuth();
  const { photoURL, email, displayName } = user || {};

  return (
    <div
      className={`fixed z-50 top-0 right-0 bg-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 w-48 lg:relative lg:top-auto lg:right-auto lg:h-auto`}
    >
      <nav className="flex flex-col gap-3 text-center py-5 h-screen border-r border-r-lightGray">
        <h1 className="text-[#4285F3] text-xl  text-center px-3 my-5 uppercase hidden md:flex italic font-semibold">
          Serene Sphere
        </h1>
        {/* Top Nav content for smaller screens */}
        <div className="lg:hidden bg-white w-full p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src={photoURL}
              alt={`image of ${displayName}`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{displayName}</p>
              <p className="text-xs font-medium text-gray">{email}</p>
            </div>
          </div>
          <button className="text-red inline-flex gap-2 justify-center items-center font-medium pl-4">
            Log Out
            <MdLogout className="bg-[#FFECEA] rounded-full w-10 h-10 p-2" />
          </button>
        </div>

        {/* Sidebar navigation links */}
        <Link
          to="/"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <GrAppsRounded />
          Home
        </Link>
        <Link
          to="/listing"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <LuUsers />
          New Listing
        </Link>
        <Link
          to="/search"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <CiSearch />
          Search
        </Link>
        <Link
          to="/about"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <TbFileDescription />
          About
        </Link>
        <Link
          to="/favorites"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <CiHeart />
          Favorites
        </Link>
        <hr className="text-lightGray" />
        <Link
          to="/help"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <TbInfoSquare />
          Help Center
        </Link>
        <Link
          to="/settings"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
          onClick={toggleSidebar}
        >
          <LuSettings />
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
