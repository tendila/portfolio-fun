import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <img
        src="./img/resume-1.png"
        alt="resume"
        style={{ width: "100%", height: "75%" }}
      />
    </div>
  );
};

export default About;
