import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { MainAllFiles } from "../components/Main-pages/MainAllFiles";

export const AllFIles = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("All Files");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-dark col-auto min-vh-100 pt-3">
          <Sidebar setSelectedNavItem={setSelectedNavItem} />
        </div>
        <div className="col-lg-10">
          <Navbar selectedNavItem={selectedNavItem} />

          <MainAllFiles />
        </div>
      </div>
    </div>
  );
};
