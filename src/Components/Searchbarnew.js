import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./Searchbar.style";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import Search from "./Search";

const Searchbarnew = ({ search, setSearch }) => {
  const [tempSearch, setTempSearch] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearch(tempSearch);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setSearch, tempSearch]);

  const linkToSearch = () => {
    return <Redirect to={`/search/${search}/`} />;
  };

  return (
    console.log(search),
    (
      <Wrapper>
        <Content>
          <form onSubmit={linkToSearch}>
            <input
              className="inp-class"
              type="text"
              placeholder="Insert coin..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.currentTarget.value)}
            />
          </form>
        </Content>
      </Wrapper>
    )
  );
};

export default Searchbarnew;
