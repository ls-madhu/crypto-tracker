import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export default Container;
