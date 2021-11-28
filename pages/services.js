import React, { useContext } from "react";
import styles from "../styles/services.module.css";
import ContextApi from "../context/modescontext";
const Services = () => {
  const lang = useContext(ContextApi);
  return (
    <div className={styles.container}>
      <h1>{lang.lang === "EN" ? "Coming Soon..." : "قريبا..."}</h1>
    </div>
  );
};

export default Services;
