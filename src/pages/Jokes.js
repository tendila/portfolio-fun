import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Jokes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = () => {
    axios.get("https://api.blablagues.net/?rub=blagues").then((joke) => {
      setData(joke.data.data.content);
    });
  };

  return (
    <div>
      <Logo />
      <Navigation />
      <div className="jokes-container" onClick={getJokes}>
        <h3 id="header">{data.text_head}</h3>
        <p id="content">{data.text !== "" ? data.text : data.text_hidden}</p>
      </div>
    </div>
  );
};

export default Jokes;
