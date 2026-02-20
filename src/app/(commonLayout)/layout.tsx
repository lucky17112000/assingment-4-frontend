import { Navbar1 } from "@/components/shared/navbar/navbar1";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Navbar1 />
      {children}
    </div>
  );
};

export default CommonLayout;
