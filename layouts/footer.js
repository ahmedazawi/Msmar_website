import React, { useContext } from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import MsmarIcon from "../src/assets/3";
import ContextApi from "../context/modescontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const lang = useContext(ContextApi);
  return (
    <footer className={styles.footer_container}>
      <div className={styles.section_one}>
        <div>
          <MsmarIcon
            style={{ fill: "white", width: "150px", marginTop: "30px" }}
          />
        </div>
        <div className={styles.section_one_links}>
          <a href="/#about"> {lang.lang === "EN" ? "About Us" : "من نحن"}</a>
          <a href="/#projects">
            {lang.lang === "EN" ? "Our Projects" : "مشاريعنا"}
          </a>
          <a href="/#contact">
            {lang.lang === "EN" ? "Contact Us" : "تواصل معنا"}
          </a>
          <Link href="/services">
            {lang.lang === "EN" ? "Services" : "ألخدمات"}
          </Link>
        </div>
      </div>
      <div className={styles.section_two}>
        <div>
          <a href="https://web.facebook.com/msmargroup" target="_blank">
            <FontAwesomeIcon icon={faFacebook} color="white" alt="Facebook" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/msmargroup/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="white" alt="Instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/msmargroup/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} color="white" alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a href="/">
            <MsmarIcon style={{ fill: "white", width: "50px" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
