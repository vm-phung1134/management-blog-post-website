import React from "react";
import FooterPublic from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterPublic />
    </>
  );
};

export default MainTemplate;
