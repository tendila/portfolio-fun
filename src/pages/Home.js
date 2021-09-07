import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Iam from "../components/Iam";
import { Wave } from "react-animated-text";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <div className="welcome">
        <Wave text="Welcome !" effect="fadeOut" speed={5} />
      </div>
      {/* <Iam /> */}
    </div>
  );
};

export default Home;
//Reutilisable partout
