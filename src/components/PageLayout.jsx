import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";

const PageLayout = ({ children }) => {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
};

export default PageLayout;
