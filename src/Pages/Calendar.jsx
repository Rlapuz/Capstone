import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { MainCalendar } from "../components/Main-pages/MainCalendar";

export const Calendar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Calendar");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-dark col-auto min-vh-100 pt-3">
          <Sidebar setSelectedNavItem={setSelectedNavItem} />
        </div>
        <div className="col-lg-10">
          <Navbar selectedNavItem={selectedNavItem} />
          <MainCalendar />
        </div>
      </div>
    </div>
  );
};
