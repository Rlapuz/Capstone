import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/sidebar.css";
import { Link, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export const Sidebar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const history = useHistory();

  // to stay active the Nav.Items even I refresh the page
  useEffect(() => {
    // Retrieve the selected item from storage when the component mounts
    const storedItem = localStorage.getItem("selectedNavItem");
    if (storedItem) {
      setSelectedNavItem(storedItem);
    }
  }, []);

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
    // Store the selected item in storage
    localStorage.setItem("selectedNavItem", navItem);
  };

  // logout
  const handleLogout = () => {
    // Clear the selected item from storage
    localStorage.removeItem("selectedNavItem");
    // Redirect to the login page
    history.push("/");
  };

  return (
    <div className="bg-dark d-flex flex-column h-100">
      {/* Sidebar header */}
      <div>
        <h4 className="text-decoration-none text-warning d-flex align-items-center ms-3 mt-1">
          <i className="fs-4 bi bi-box-fill"></i>
          <span className="ms-2 fs-4 d-none d-sm-inline">Management</span>
        </h4>
        <hr className="text-secondary" />
        {/* Sidebar navigation */}
        <Nav className="flex-column">
          {/* Dashboard link */}
          <Nav.Item className="py-sm-0">
            <Nav.Link
              as={Link}
              to="/dashboard"
              className={`text-white text-opacity-75 fs-5 my-1 nav-link ${
                selectedNavItem === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Dashboard")}>
              <i className="bi bi-grid-fill"></i>
              <span className="ms-3 d-none d-sm-inline">Dashboard</span>
            </Nav.Link>
          </Nav.Item>
          {/* View Files link */}
          <Nav.Item className="py-sm-0">
            <Nav.Link
              as={Link}
              to="/viewfiles"
              className={`text-white text-opacity-75 fs-5 my-1 nav-link ${
                selectedNavItem === "View Files" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("View Files")}>
              <i className="bi bi-folder-symlink-fill"></i>
              <span className="ms-3 d-none d-sm-inline">View Files</span>
            </Nav.Link>
          </Nav.Item>
          {/* All Files link */}
          <Nav.Item className="py-sm-0">
            <Nav.Link
              as={Link}
              to="/allfiles"
              className={`text-white text-opacity-75 fs-5 my-1 nav-link ${
                selectedNavItem === "All Files" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("All Files")}>
              <i className="bi bi-folder-fill"></i>
              <span className="ms-3 d-none d-sm-inline">All Files</span>
            </Nav.Link>
          </Nav.Item>
          {/* Calendar link */}
          <Nav.Item className="py-sm-0">
            <Nav.Link
              as={Link}
              to="/calendar"
              className={`text-white text-opacity-75 fs-5 my-1 nav-link ${
                selectedNavItem === "Calendar" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Calendar")}>
              <i className="bi bi-calendar-event-fill"></i>
              <span className="ms-3 d-none d-sm-inline">Calendar</span>
            </Nav.Link>
          </Nav.Item>
          {/* Programs link */}
          <Nav.Item className="py-sm-0">
            <Nav.Link
              as={Link}
              to="/programs"
              className={`text-white text-opacity-75 fs-5 my-1 nav-link ${
                selectedNavItem === "Programs" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Programs")}>
              <i className="bi bi-book-half"></i>
              <span className="ms-3 d-none d-sm-inline">Programs</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/* Sidebar bottom */}
      <div className="text-center mt-auto mb-4">
        <hr className="text-secondary" />
        <div className="">
          <p className="mb-0 text-white fs-5">Raymund</p>
          <p className="text-muted">Dean</p>
        </div>
        <div className="d-flex justify-content-center">
          {/* Logout button */}
          <button
            type="button"
            className="btn btn-danger d-flex align-items-center justify-content-between py-2"
            onClick={handleLogout}>
            <span className="text-center">
              <i className="bi bi-box-arrow-right me-sm-3"></i>
            </span>
            <span className="d-none d-sm-inline">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
