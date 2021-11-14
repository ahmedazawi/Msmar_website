import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import React, { useState, useEffect } from "react";
import modesContext from "../context/modescontext";
import cookieCutter from "cookie-cutter";
const Layout = ({ children }) => {
  const [lang, setLang] = useState();

  useEffect(() => {
    let myCoockie = document.cookie.split("=")[1];
    if (myCoockie === "AR") {
      setLang("AR");
    } else if (myCoockie === "EN") {
      setLang("EN");
    } else {
      setLang("AR");
    }
  }, []);
  useEffect(() => {
    cookieCutter.set("lang", lang);
    if (lang === "AR") {
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
  });
  const changeLang = () => {
    if (lang === "AR") {
      setLang("EN");
      // window.location.reload();
    } else {
      setLang("AR");
      // window.location.reload();
    }
  };
  return (
    <div>
      <modesContext.Provider value={{ lang: lang }}>
        <Head>
          <title>Msmar | مسمار</title>
          <link rel="icon" type="image/png" href="/msmar.png" sizes="96x96" />

          {/* google fonts */}
          {/* EN pattern font */}
          <link
            href="http://fonts.cdnfonts.com/css/bitsumishi"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* google map api */}
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <Header changeLang={changeLang} />

        <main>{children}</main>

        <Footer />
      </modesContext.Provider>
    </div>
  );
};

export default Layout;
