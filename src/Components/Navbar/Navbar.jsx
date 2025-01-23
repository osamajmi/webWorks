import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import custom CSS
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  // State to track if the navbar should be sticky
  const [isSticky, setIsSticky] = useState(false);

  // Scroll event listener to toggle the sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Start */}
      <div className={`container-fluid header position-relative overflow-hidden p-0 ${isSticky ? 'sticky-navbar' : ''}`}>
        <nav className={`navbar navbar-expand-lg fixed-top px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'bg-green' : ''}`}>
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="display-6 text-primary m-0">
              <i className="fas fa-envelope me-3"></i>WEBWORKS
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/services" className="nav-item nav-link">
                Services
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact Us
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};
