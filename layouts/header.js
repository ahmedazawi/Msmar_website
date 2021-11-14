import React, { useState, useEffect, useRef, useContext } from "react";
import modesContext from "../context/modescontext";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../src/assets/1";
import LogoWhite from "../src/assets/3";

const Header = (props) => {
  const font = useRef();
  const [mode, setMode] = useState("light");
  const [navStyle, setNavStyle] = useState("");
  const lang = useContext(modesContext);
  let router = useRouter();

  // header update
  useEffect(() => {
    let navs = document.querySelector(".header");
    document.addEventListener("click", clickOutListener);
    if (window.location.pathname === "/") {
      setNavStyle("transparent");
      setMode("light");
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else if (window.location.pathname !== "/") {
      setNavStyle("white");
      navs.style.top = "0";
      setMode("dark");
    }
  }, [router.route]);

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setNavStyle("white");
      setMode("dark");
    } else {
      setNavStyle("transparent");
      setMode("light");
    }
  };

  const clickOutListener = (e) => {
    let dropContent = document.querySelector(".dropdown-content");
    var drop = document.querySelector(".dropdown");
    if (!drop.contains(e.target)) {
      dropContent.style.display = "none";
    }
  };

  const mobileMenu = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  const dropDownList = () => {
    let dropContent = document.querySelector(".dropdown-content");

    if (dropContent.style.display === "block") {
      dropContent.style.display = "none";
    } else {
      dropContent.style.display = "block";
    }
  };
  return (
    <header
      className="header"
      style={
        navStyle === "white"
          ? {
              backgroundColor: "white",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
            }
          : { backgroundColor: "transparent", boxShadow: "none" }
      }
    >
      <nav className="navbar">
        <Link href="/">
          <a>
            <div
              style={{
                width: "60px",
              }}
            >
              {router.pathname === "/" && navStyle === "transparent" ? (
                <LogoWhite style={{ fill: "white" }} />
              ) : (
                <Logo />
              )}
            </div>
          </a>
        </Link>

        <ul className="nav-menu">
          <li ref={font} className="nav-item">
            <Link href="/">
              <a
                style={mode == "dark" ? { color: "black" } : { color: "white" }}
                className="nav-link"
              >
                {lang.lang === "EN" ? "Home" : "ألرئيسية"}
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
              <a
                style={mode == "dark" ? { color: "black" } : { color: "white" }}
                className="nav-link"
              >
                {lang.lang === "EN" ? "Services" : "ألخدمات"}
              </a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/about">
              <a
                style={mode == "dark" ? { color: "black" } : { color: "white" }}
                className="nav-link"
              >
                {lang.lang === "EN" ? "about" : "من نحن"}
              </a>
            </Link>
          </li> */}
          <li
            className="nav-item"
            style={lang.lang === "AR" ? { marginLeft: "22px" } : {}}
          >
            <div className="nav-link dropdown">
              <span
                className="dropbtn"
                style={mode == "dark" ? { color: "black" } : { color: "white" }}
                onClick={dropDownList}
              >
                {lang.lang === "EN" ? "Options" : "خيارات"}
              </span>
              <div className="dropdown-content">
                <div className="language">
                  <div>{lang.lang === "EN" ? "Language" : "أللغة"}</div>
                  <div>
                    <label
                      className="switch"
                      onClick={() => props.changeLang()}
                    >
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div>Link 2</div>
                <div>Link 3</div>
              </div>
            </div>
          </li>
        </ul>
        <div className="hamburger" onClick={mobileMenu}>
          <span
            style={
              mode == "dark"
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }
            className="bar"
          ></span>
          <span
            style={
              mode == "dark"
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }
            className="bar"
          ></span>
          <span
            style={
              mode == "dark"
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }
            className="bar"
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
