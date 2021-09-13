import styled from "styled-components";

export const Wrapper = styled.div`
  height: 0px;
  padding: px;
  margin: 0px auto;
`;

export const Content = styled.div`
  width: 1280px;
  height: 60px;
  background: white;
  border-radius: 30px;
  color: white;

  @media screen and (max-width: 500px) {
    width: 200px;
    height: 40px;
    margin: 10px auto;
  }

  input {
    font-size: 30px;
    padding: 0px;
    margin: 0 40px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 60px;
    color: black;
    font-weight: bold;

    @media screen and (max-width: 500px) {
      font-size: 20px;
      height: 40px;
    }

    :focus {
      outline: none;
    }
  }
`;
