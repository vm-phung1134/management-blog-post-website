import React from "react";
import HeaderPublic from "../../Layout/Header";
import FooterPublic from "../../Layout/Footer";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderPublic />
      {children}
      <FooterPublic />
    </div>
  );
};

export default MainTemplate;
