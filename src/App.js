import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About.js";
import News from "./pages/News.js";
import Polkadot from "./pages/Polkadot.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WorldFlag from "./pages/WorldFlag";
import Jokes from "./pages/Jokes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/world-flag" exact component={WorldFlag} />
        <Route path="/about" exact component={About} />
        <Route path="/news" exact component={News} />
        <Route path="/polkadot" exact component={Polkadot} />
        <Route path="/jokes" exact component={Jokes} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
