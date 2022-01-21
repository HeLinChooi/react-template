import React from "react";
import BottomNavigation from "@Components/BottomNavigation";
import Header from "@Components/Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <BottomNavigation />
    </div>
  );
};

export default PageLayout;
