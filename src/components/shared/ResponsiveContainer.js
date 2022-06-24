import styled from "styled-components";

const ResponsiveContainer = styled.div`
  display: flex;
  height: calc(100% - 50px);

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default ResponsiveContainer;
