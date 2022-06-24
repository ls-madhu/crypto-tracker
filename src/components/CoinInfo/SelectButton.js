import styled from "styled-components";
import { Button } from "../shared/Button";

const SelectButton = styled(Button)`
  background-color: ${({ selected }) =>
    selected ? "var(--primary-text-color) !important" : "initial"};
  color: ${({ selected }) =>
    selected ? "var(--primary-background-color) !important" : "initial"};

  &:hover {
    background-color: var(--secondary-neutral-color) !important;
  }
`;

export default SelectButton;
