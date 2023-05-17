import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MainDashboard } from "../components/Main-pages/MainDashboard";

export const Dashboard = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Dashboard");

  // State variable for selected files
  const [selectedFiles, setSelectedFiles] = useState([]);
  //
  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
  };

  // for animation
  const location = useLocation();
  const { from, pageTransition } = location.state || {};

  return (
    <motion.div
      className="container-fluid"
      // styling for animation
      initial={from === "login" ? { opacity: 0 } : {}}
      animate={{ opacity: 1 }}
      transition={pageTransition || {}}
      //
    >
      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-2 col-lg-2 min-vh-100 d-flex flex-column justify-content-between pt-3">
          <Sidebar setSelectedNavItem={setSelectedNavItem} />
        </div>
        <div className="col-md-10">
          <Navbar
            selectedNavItem={selectedNavItem}
            // props from Navbar
            handleFilesSelectedProp={handleFilesSelected}
          />
          <MainDashboard selectedFiles={selectedFiles} />
        </div>
      </div>
    </motion.div>
  );
};
