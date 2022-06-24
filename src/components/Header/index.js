import styled from "styled-components";

import Logo from "./Logo";

const Header = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  text-transform: uppercase;
  background-color: var(--primary-background-color);
  border-bottom: 1px solid var(--primary-border-color);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background-color: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(14, 13, 11, 0.8)"
        : "rgba(241, 242, 244, 0.8)"};
    backdrop-filter: blur(16px);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

Header.Logo = Logo;
Header.Content = Content;

export default Header;
