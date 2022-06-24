import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#0e0d0b" : "#f1f2f4"};
    --secondary-background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#282828" : "#d7d7d7"};
    --primary-text-color: ${({ theme }) =>
      theme.mode === "dark" ? "#e6e3e0" : "#191c1f"};
    --secondary-text-color: ${({ theme }) =>
      theme.mode === "dark" ? "#bebebe" : "#414141"};
    --primary-neutral-color: ${({ theme }) =>
      theme.mode === "dark" ? "#5e5e5e" : "#a1a1a1"};
    --secondary-neutral-color: ${({ theme }) =>
      theme.mode === "dark" ? "#3e3e3e" : "#c1c1c1"};
    --primary-border-color: ${({ theme }) =>
      theme.mode === "dark" ? "#201c18" : "#dfe3e7"};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: 0;
    scroll-behavior: smooth;
  }

  *:focus-visible {
    outline: 2px solid #0088ff;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-neutral-color);
  }

  html {
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Karla', sans-serif;
    background-color: var(--primary-background-color);
    color: var(--primary-text-color);
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
