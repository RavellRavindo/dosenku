import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-cyan-500 text-white p-4 rounded-lg">
      <h1 className="text-3xl font-semibold p-2">SketchWeb</h1>
      <div className="flex flex-col items-center mt-6">
        <button className="font-semibold py-3 w-11/12 rounded-md bg-white text-black transition-transform hover:scale-105">
          Template
        </button>
        <button className="font-semibold py-3 w-11/12 rounded-md mt-4 transition-transform hover:scale-105">
          Overview
        </button>
        <button className="font-semibold py-3 w-11/12 rounded-md mt-4 transition-transform hover:scale-105">
          Download
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;