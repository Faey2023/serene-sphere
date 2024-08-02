import { Outlet } from "react-router-dom";
import Sidebar from "../components/Home/Sidebar";

const MainPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="h-screen fixed z-[99999] shadow-xl">
          <div className="hidden lg:flex flex-col max-w-64 mx-auto">
            <Sidebar />
          </div>
        </div>
        <div className="md:ml-56">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
