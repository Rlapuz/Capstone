import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import { validateEmail, validatePassword } from "../Validation/Validation";
// Import Framer Motion for animation on main pages
import { motion } from "framer-motion";

export const Login = () => {
  // Use history for programmatic navigation
  const history = useHistory();

  // State variables for email and password, and error messages for validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    // Set the error messages for email and password
    setEmailError(emailError);
    setPasswordError(passwordError);

    // Perform login action if both email and password are valid
    if (emailError === "" && passwordError === "") {
      // For demonstration purposes, let's assume the login was successful after a delay
      setTimeout(() => {
        // Redirect to the dashboard page with animation
        history.push("/dashboard", {
          from: "login",
          // Animation properties
          pageTransition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
      });
    }
  };

  // Handle changes to email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(validateEmail(event.target.value));
  };

  // Handle changes to password input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(validatePassword(event.target.value));
  };

  return (
    <motion.div
      className="container-fluid login"
      // for styling animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      //
    >
      <div className="row justify-content-center min-vh-100">
        <div className="col-lg-4 col-auto mt-5">
          <form action="" className="bg-dark opacity-75 mt-5 p-5 rounded">
            <div className="text-center mb-5">
              <h3 className="text-white">Welcome!</h3>
              <p className="text-white">File Management</p>
            </div>
            {/* Email */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="floatingInputGroup1"
                  placeholder="Username"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlFor="floatingInputGroup1" className="fw-bold">
                  Email
                </label>
              </div>
            </div>
            {/* Email Error */}
            {emailError && (
              <div className="text-danger mb-3 fw-bold">{emailError}</div>
            )}
            {/* Password */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>
              <div className="form-floating">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control fw-bold"
                  id="floatingInputGroup2"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="floatingInputGroup2" className="fw-bold">
                  Password
                </label>
              </div>
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </span>
            </div>
            {/* Password Error */}
            {passwordError && (
              <div className="text-danger mb-3 fw-bold">{passwordError}</div>
            )}
            <div className="d-flex justify-content-center mt-5">
              <button
                type="submit"
                className="btn btn-light px-4 fw-bold"
                onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
