import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;

  padding: 20px 0px;
  margin: 0px auto;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
