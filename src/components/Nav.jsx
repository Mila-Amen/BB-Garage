import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css"; // Custom styles

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const isServicePage = location.pathname === "/services"; // Check if we are on service page
  console.log(isServicePage);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img
            src="BBGarageLogo.png"
            style={{ width: isServicePage ? "150px" : "600px" }}
          // Automatically adjust size
            alt="Logo"
          />
        </NavLink>
        

        {/* Hamburger Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-end">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link" onClick={() => setIsOpen(false)}>Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  );
  
}
