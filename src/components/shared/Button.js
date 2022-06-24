import { styled } from "@mui/material/styles";
import { default as MuiButton } from "@mui/material/Button";

export const Button = styled(MuiButton)`
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-text-color);
  padding: 0 0.6rem;
  border: 0.1rem solid var(--primary-text-color);
  border-radius: 0;

  &:focus-visible {
    outline: 2px solid #0088ff;
  }
`;

export const IconButton = styled(Button)`
  min-width: 0;
  border: none;
  padding: 0.3rem;
  font-size: 1.4rem;

  &:hover {
    background-color: var(--secondary-background-color);
  }
`;
