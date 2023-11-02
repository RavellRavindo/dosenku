import React from "react";
import MainContent from "./mainComponent/MainContent";
import Sidebar from "./mainComponent/Sidebar";
import NavDashboard from "./mainComponent/NavDashboard";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 p-6">
      <Sidebar />
      <div className="flex-row w-screen">
        <NavDashboard/>
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
