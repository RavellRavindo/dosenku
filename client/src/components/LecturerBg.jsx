import React from "react";

const LecturerBg = () => {
  return (
    <div className="content primaryBgColor my-20 h-80 flex flex-col items-center justify-center">
      <img
        className="h-36 w-36 rounded-full ring-1 ring-black"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <h1 className="mt-5 text-xl">
        Prof. Idris Gautama So, <br />
        S.E., S.Kom., M.M., Ph.D.{" "}
      </h1>
    </div>
  );
};

export default LecturerBg;
