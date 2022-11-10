import React, { useState } from "react";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const [activeLink, setActiveLink] = useState(currentRoute);
  return (
    <div
      style={{
        position: "relative",
        width: "98.6vw",
        zIndex: 2,
        marginTop: "-0.5rem",
      }}
    >
      {" "}
      <BootstrapNavbar className="border-bottom" bg="white" expand="lg">
        <BootstrapNavbar.Brand className="nav-link">
          <a href="/" style={{ color: "black", fontWeight: "bolder", textDecoration:'none' }}>
            KM
          </a>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          className="border-0"
          aria-controls="navbar-toggle"
        />
        <BootstrapNavbar.Collapse id="navbar-toggle">
          <Nav
            className="ml-auto"
            style={{
              alignItems: "center",
              fontFamily: "Open Sans",
              fontSize: "large",
              fontWeight: "normal",
            }}
          >
            <Link
              className="nav-link"
              to="/blog"
              style={{ verticalAlign: "center" }}
              onClick={() => {
                setActiveLink("/blog");
              }}
            >
              {activeLink !== "/blog" ? (
                <button
                  style={{
                    background: "transparent",
                    verticalAlign: "center",
                    outlineColor: "#007BFF",
                    color: "#007BFF",
                    borderRadius: "999px",
                    border: "2px solid",
                    paddingInline: "0.7rem",
                  }}
                >
                  Blog
                </button>
              ) : (
                <button
                  style={{
                    background: "#007BFF",
                    verticalAlign: "center",
                    outlineColor: "#007BFF",
                    color: "white",
                    borderRadius: "999px",
                    border: "2px solid",
                    paddingInline: "0.7rem",
                    fontWeight: "bold",
                  }}
                >
                  Blog
                </button>
              )}
            </Link>
            <div style={{ paddingInline: "0.5rem" }}></div>
            <Link
              className="nav-link"
              to="/"
              onClick={() => {
                setActiveLink("/");
              }}
              style={LinkStyle("/")}
            >
              Home
            </Link>
            <div style={{ paddingInline: "0.5rem" }}></div>
            <Link
              className="nav-link"
              to="/about"
              onClick={() => {
                setActiveLink("/about");
              }}
              style={LinkStyle("/about")}
            >
              About
            </Link>
            <div style={{ paddingInline: "0.5rem" }}></div>

            <Link
              className="nav-link"
              to="/projects"
              onClick={() => {
                setActiveLink("/projects");
              }}
              style={LinkStyle("/projects")}
            >
              Projects
            </Link>
            <div style={{ paddingInline: "0.5rem" }}></div>

            <Link
              className="nav-link"
              to="/contact"
              onClick={() => {
                setActiveLink("/contact");
              }}
              style={LinkStyle("/contact")}
            >
              Contact
            </Link>
            <div style={{ paddingInline: "0.5rem" }}></div>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

const LinkStyle = (navLink) => {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  if (navLink === currentRoute) {
    return { color: "#007BFF", fontWeight: "bold" };
  } else {
    return { fontWeight: "normal" };
  }
};

export default Navbar;
