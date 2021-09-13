import { div } from "prelude-ls";
import React from "react";
import Searchbarnew from "./Searchbarnew";
import Button from "./Button";
import { Wrapper } from "./Nav.style";

const Nav = ({ search, setSearch }) => {
  return (
    <Wrapper>
      <Searchbarnew search={search} setSearch={setSearch} />
      <Button search={search} />
    </Wrapper>
  );
};

export default Nav;
