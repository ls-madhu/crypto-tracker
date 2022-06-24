import styled from "styled-components";

const Sidebar = styled.div`
  width: 30%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 2px solid var(--primary-border-color);

  @media screen and (max-width: 992px) {
    width: 100%;
    margin-top: 2rem;
    height: auto;
    border: none;
  }
`;

export default Sidebar;
