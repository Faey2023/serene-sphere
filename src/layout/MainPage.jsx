import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from "../components/Home/shared/Sidebar";

const MainPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    // console.log("Sidebar toggled");
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative flex bg-cream container">
      <div className="lg:hidden">
        <button
          className="fixed z-50 top-5 right-5 text-3xl text-black"
          onClick={toggleSidebar}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={`flex-1 transition-filter duration-300 ${
          isSidebarOpen ? "blur-sm" : "blur-none"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
