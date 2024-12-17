import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 grid grid-cols-[260px_auto] h-screen">
        <div className="h-full">
          <Sidebar />
        </div>

        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
