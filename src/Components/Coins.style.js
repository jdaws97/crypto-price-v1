import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1700px;
  margin: auto;

  .coin-list {
    justify-content: space-between;
    border: 2px solid white;
    background: white;
    display: flex;
    border-radius: 70px;
    margin: 10px;
  }

  .name-and-logo,
  h2 {
    margin: auto 0;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    font-size: 25px;
  }
  img {
    height: 80px;
    margin: auto;
    padding-right: 20px;
  }
`;

export const Content = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 20px;
`;

/*export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 4rem;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 2rem;
  }
`; */
