import React from "react";
import LecturerNav from "../components/LecturerNav";
import LecturerBg from "../components/LecturerBg";
import ContentSwitcher from "../components/ContentSwitcher";
import Footer from "../components/Footer";

const LecturerProfile = () => {
  return (
    <>
      <LecturerNav />
      <LecturerBg />
      <ContentSwitcher />
      <Footer />
    </>
  );
};

export default LecturerProfile;
