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

  const mobileMenu = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
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

          <li
            className="nav-item"
            style={lang.lang === "AR" ? { marginLeft: "0" } : {}}
          >
            <div className="nav-link lan-switch">
              <input
                id="language-toggle"
                className="check-toggle check-toggle-round-flat"
                type="checkbox"
                onClick={() => props.changeLang()}
                style={
                  navStyle === "white"
                    ? {
                        backgroundColor: "black",
                      }
                    : { backgroundColor: "white" }
                }
              />
              <label
                htmlFor="language-toggle"
                style={
                  navStyle === "white"
                    ? {
                        backgroundColor: "rgb(108, 75, 157)",
                      }
                    : { backgroundColor: "white" }
                }
              ></label>
              <span className="on">{lang.lang === "EN" ? "EN" : "AR"}</span>
              <span className="off">{lang.lang === "EN" ? "AR" : "EN"}</span>
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
