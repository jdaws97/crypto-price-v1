import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./Searchbar.style";

import Price from "./Price";

//const [state, setState] = useState(false);

const Searchbar = () => {
  const [state, setState] = useState(false);

  const [search, setSearch] = useState("");

  const changeState = () => {
    setState(true);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  if (!state) {
    return (
      <Wrapper>
        <Content>
          <form onSubmit={changeState}>
            <input
              className="inp-class"
              type="text"
              placeholder="Insert coin..."
              value={search}
              onChange={updateSearch}
            />
          </form>
        </Content>
      </Wrapper>
    );
  } else {
    return <Price search={search} state={state} />;
  }
};

export default Searchbar;
