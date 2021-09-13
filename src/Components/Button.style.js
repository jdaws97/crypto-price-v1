import styled from "styled-components";

export const Content = styled.button`
  width: 5%;
  min-width: 50px;
  height: 60px;
  border-radius: 30px;
  color: white;
  border: 0;
  font-size: 40px;
  transition: all 0.3s;
  cursor: pointer;
  background-color: #5b6467;

  @media screen and (max-width: 500px) {
    width: 0px;
    padding: 2px;
    margin: 0px;
  }

  :hover {
    opacity: 0.8;
  }
`;
