import { GrAppsRounded } from "react-icons/gr";
import { CiHeart, CiSearch } from "react-icons/ci";
import { LuSettings, LuUsers } from "react-icons/lu";
import { TbFileDescription, TbInfoSquare } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0  bg-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 w-48 lg:relative lg:top-auto lg:right-auto lg:h-auto`}
    >
      <nav className="flex flex-col gap-3 text-center py-5 h-screen border-r border-r-[#E7E7E7]">
        <h1 className="text-[#4285F3] text-4xl p-5 uppercase">Logo</h1>
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
        <hr className="text-[#E7E7E7]" />
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
