import React, { useState, useContext } from "react";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import ThemeContext from "../utils/ThemeContext";
const spiderIcon = require("../assets/miles-morales-icon.svg");

const Navbar = () => {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const [activeLink, setActiveLink] = useState(currentRoute);
  const { themeName, updateTheme } = useContext(ThemeContext);
  const handleSwitchChange = () => {
    let newThemeName = "";
    if (themeName === "spiderverse") {
      newThemeName = "normal";
    } else if (themeName === "normal") {
      newThemeName = "spiderverse";
    }
    updateTheme(newThemeName);
    console.log(themeName);
  };

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
          <a
            href="/"
            style={{
              color: "black",
              fontWeight: "bolder",
              textDecoration: "none",
            }}
          >
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
            <Switch
              onChange={handleSwitchChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            {/* <MaterialUISwitch
              onChange={handleSwitchChange}
              inputProps={{ "aria-label": "controlled" }}
            /> */}
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,

  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
        </svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#8796A5",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#003892",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
