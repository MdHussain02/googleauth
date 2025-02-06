import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* TopBar spans the full width */}
      <TopBar />
      {/* Sidebar & Main Content Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar takes only needed width */}
        <div >
        <SideBar  />
        </div>
        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet /> {/* Renders the selected route's content */}
        </div>

      </div>
    </div>
  );
};
export default Home;
