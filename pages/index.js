import React, { useContext, useEffect } from "react";
import modesContext from "../context/modescontext";
export default function Home() {
  const lang = useContext(modesContext);

  useEffect(() => {
    if (lang.lang === "EN") {
      document.querySelector(
        ".main-img p"
      ).innerHTML = `<h1> Msmar Group</h1> we can nailed it !`;
    } else {
      document.querySelector(
        ".main-img p"
      ).innerHTML = `<h1> مجموعة مسمار</h1> إحنة نكدرلها !`;
    }
  }, [lang.lang]);
  return (
    <>
      <div className="main-img">
        <p style={{ fontSize: "40px" }}></p>
      </div>
      <div style={{ height: "2000px", zIndex: "1", color: "red" }}>home</div>
    </>
  );
}
