import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/navbar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
// Import Framer Motion for animation on main pages
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ selectedNavItem, handleFilesSelectedProp }) => {
  // Ref for file input and state for profile image
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Handle upload button click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle file upload for image profile
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // State and function for sort dropdown
  const [selectedSort, setSelectedSort] = useState("");
  const handleSortOption = (sortOption) => {
    setSelectedSort(sortOption);
  };

  // Initialize state to hold selected files
  const [selectedFiles] = useState([]);
  // Handle file selection for "Add Files" button
  const handleFilesSelected = (event) => {
    const files = Array.from(event.target.files);
    handleFilesSelectedProp(files);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="mt-2"
        style={{ height: "25vh" }}
        // for styling animation
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        //
      >
        {/* Search Bar */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="input-group" style={{ width: "30%" }}>
            <input
              type="text"
              className="form-control d-none d-sm-inline"
              placeholder="Search..."
            />
            <button type="button" className="btn custom-button">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="flex-grow-1"></div>
          {/* Notification Bell */}
          <button type="button" className="btn custom-button rounded-circle">
            <i className="bi bi-bell-fill"></i>
          </button>
          {/* Profile Pic */}
          <div className="upload-circle me-2 ms-3" onClick={handleUploadClick}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            {imageSrc ? (
              <img src={imageSrc} alt="Profile" className="profile-img" />
            ) : (
              <i className="bi bi-person-circle"></i>
            )}
          </div>
        </div>
        <hr className="text-secondary" />
        {/* Navbar Details */}
        <div className="d-flex align-items-center flex-wrap">
          {" "}
          {/* Added flex-wrap class */}
          <div className="me-auto">
            <h4 className="mb-0 fw-bold">{selectedNavItem}</h4>
            <p className="text-muted">Welcome to {selectedNavItem}</p>
          </div>
          <div className="d-flex flex-wrap align-items-center">
            {/* Add Files Button */}
            <div className="btn-group me-2">
              <label className="btn custom-button">
                <input
                  type="file"
                  onChange={handleFilesSelected}
                  multiple
                  hidden
                />
                Add Files
              </label>
            </div>
            {/* Render selected files */}
            {selectedFiles.length > 0 && (
              <ul>
                {selectedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            )}
            {/* Sort By Dropdown */}
            <DropdownButton
              title="Sort By"
              variant="secondary"
              id="sort-dropdown"
              className="sort-button me-2 ms-sm-2 mt-2 mt-sm-0">
              {" "}
              <Dropdown.Item
                active={selectedSort === "date"}
                onClick={() => handleSortOption("date")}>
                By Date
              </Dropdown.Item>
              <Dropdown.Item
                active={selectedSort === "size"}
                onClick={() => handleSortOption("size")}>
                By Size
              </Dropdown.Item>
            </DropdownButton>
            {/* List Files Dropdown */}
            <DropdownButton
              title="List Files"
              variant="secondary"
              id="sort-dropdown"
              className="sort-button me-2 ms-sm-2 mt-2 mt-sm-0">
              <Dropdown.Item
                active={selectedSort === "date"}
                onClick={() => handleSortOption("date")}>
                Alphabetical
              </Dropdown.Item>
              <Dropdown.Item
                active={selectedSort === "size"}
                onClick={() => handleSortOption("size")}>
                Random
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <hr className="text-secondary mt-0" />
      </motion.div>
    </AnimatePresence>
  );
};
