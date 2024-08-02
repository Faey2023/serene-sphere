import { GrAppsRounded } from "react-icons/gr";
import { CiHeart, CiSearch } from "react-icons/ci";
import { LuSettings, LuUsers } from "react-icons/lu";
import { TbFileDescription, TbInfoSquare } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="w-48 flex flex-col gap-3 text-center py-5">
        <h1 className="text-[#4285F3] text-4xl p-5 uppercase">Logo</h1>
        <Link
          to="/"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <GrAppsRounded />
          Home
        </Link>
        <Link
          to="/listing"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <LuUsers />
          New Listing
        </Link>
        <Link
          to="/search"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <CiSearch />
          Search
        </Link>
        <Link
          to="/about"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <TbFileDescription />
          About
        </Link>
        <Link
          to="/about"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <CiHeart />
          Favorites
        </Link>
        <hr className="text-[#E7E7E7]" />
        <Link
          to="/about"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <TbInfoSquare />
          Help Center
        </Link>
        <Link
          to="/about"
          className="text-base hover:bg-lightBlue text-gray hover:text-black hover:font-medium p-2 inline-flex gap-2 items-center hover:border-l-[3px] hover:border-[#102C4A]"
        >
          <LuSettings />
          Settings
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
