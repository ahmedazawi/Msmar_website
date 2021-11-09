import React, { useState, useContext } from "react";
import modesContext from "../context/modescontext";
const About = () => {
  const lang = useContext(modesContext);
  const [subject, setSubject] = useState({ subject: "" });
  const [message, setMessage] = useState({ message: "" });

  return (
    <div className="about-us">
      <div>informations</div>
    </div>
  );
};

export default About;
