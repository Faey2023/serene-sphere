import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from "../components/Home/shared/Sidebar";
import TopNav from "../components/Home/shared/TopNav";
import { FaRegBell } from "react-icons/fa6";

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
    <div className="relative flex bg-cream">
      <div className="lg:hidden p-3 bg-white fixed z-50 top-0 flex justify-between text-3xl text-black w-full">
        <h1 className="text-[#4285F3] text-4xl uppercase">Logo</h1>
        <div className="flex gap-5 justify-center items-center">
          <FaRegBell className="" />
          <button onClick={toggleSidebar}>
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={`flex-1 transition-filter duration-300 ${
          isSidebarOpen ? "blur-sm" : "blur-none"
        }`}
      >
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;

// import { useState, useRef, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import Sidebar from "../components/Home/shared/Sidebar";
// import TopNav from "../components/Home/shared/TopNav";
// import { FaRegBell } from "react-icons/fa6";

// const MainPage = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isSidebarOpen]);

//   return (
//     <div className="">
//       <div className="lg:hidden p-2 bg-white fixed z-50 top-0 flex justify-end text-3xl text-black w-full">
//         <FaRegBell className="w-10 h-10 p-2 mr-5" />
//         <button
//           // className="fixed z-50 top-5 right-0 text-3xl text-black"
//           onClick={toggleSidebar}
//         >
//           <HiOutlineMenuAlt3 />
//         </button>
//       </div>
//       <div ref={sidebarRef}>
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       </div>
//       <div
//         className={`flex-1 transition-filter duration-300 ${
//           isSidebarOpen ? "blur-sm" : "blur-none"
//         }`}
//       >
//         <div className="hidden lg:block ">
//           <TopNav />
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default MainPage;
