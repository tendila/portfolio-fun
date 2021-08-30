import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/world-flag" activeClassName="nav-active">
        World flag
      </NavLink>
      <NavLink exact to="news" activeClassName="nav-active">
        Blog
      </NavLink>
      <NavLink exact to="polkadot" activeClassName="nav-active">
        Polkadot
      </NavLink>
      <NavLink exact to="about" activeClassName="nav-active">
        Resume
      </NavLink>
    </div>
  );
};

export default Navigation;
