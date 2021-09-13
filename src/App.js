import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import Searchbarnew from "./Components/Searchbarnew";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coins from "./Components/Coins";
import { Wrapper } from "./Components/App.style";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <Nav search={search} setSearch={setSearch} />
      <Router>
        <Switch>
          <Route path="/" exact component={Coins} />
          <Route path={`/search/${search}`} exact component={Search} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
