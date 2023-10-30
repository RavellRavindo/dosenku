import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 p-6">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
