import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Content } from "./Button.style";
import { Redirect } from "react-router-dom";

const Button = ({ search }) => {
  const linkToSearch = () => {
    return <Redirect to={`/search/${search}/`} />;
  };
  return (
    <div>
      <Content type="button">
        <FontAwesomeIcon onClick={linkToSearch} icon={faSearch} />
      </Content>
    </div>
  );
};

export default Button;
