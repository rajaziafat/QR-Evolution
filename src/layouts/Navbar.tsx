import OutsideClickDetector from "hooks/OutsideClickDetector";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const SidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));

  return (
    <div className="border-b-1px border-b-black bg-transparent">
      <div className="container h-navbar-height flex items-center justify-between">
        <Link to="/">
          <img
            src="images/logo.png"
            className="w-[60px] sm:w-[70px] xl:w-[120px]"
            alt=""
          />
        </Link>

        <button
          className="w-4 block sm:hidden"
          onClick={() => setIsSidebarOpen((val) => !val)}
        >
          <img
            src="images/hamburger.png"
            className="w-full opacity-60"
            alt=""
          />
        </button>

        <div
          ref={SidebarRef}
          className={`flex flex-col p-10 sm:p-0 sm:flex-row sm:items-center fixed sm:static top-0 right-0 w-[260px] sm:w-auto h-full bg-white z-[200] sm:space-x-12 transition-all duration-[.3s] ${
            isSidebarOpen
              ? "translate-x-0"
              : "translate-x-[260px] sm:translate-x-0"
          }`}
        >
          <button
            className="w-fit opacity-60 block mb-8 sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <img src="images/close.png" className="w-4" alt="" />
          </button>

          <a href="#" className="text-sm xl:text-base mb-4 sm:mb-0">
            Home
          </a>
          <a href="#" className="text-sm xl:text-base mb-4 sm:mb-0">
            About
          </a>
          <a href="#" className="text-sm xl:text-base mb-4 sm:mb-0">
            FAQ
          </a>
          <a href="#" className="text-sm xl:text-base mb-4 sm:mb-0">
            Team
          </a>
        </div>

        <div className={`black-screen ${isSidebarOpen && "show"}`}></div>
      </div>
    </div>
  );
}

export default Navbar;
