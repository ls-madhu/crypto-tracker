import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectContainer = styled.div`
  position: relative;
  max-width: 200px;

  & svg {
    position: absolute;
    right: 0.3rem;
    top: 0.36rem;
    font-size: 1.2rem;
    pointer-events: none;
  }
`;

const SelectInput = styled.select`
  -webkit-appearance: none;
  background: var(--primary-background-color);
  color: var(--primary-text-color);
  border: 0.1rem solid var(--primary-text-color);
  font-weight: 700;
  border-radius: 0;
  padding: 0.3rem 2.5rem 0.3rem 0.8rem;
  width: 100%;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  transition: all 150ms ease;
`;

const Select = ({ children, onChange, value }) => {
  return (
    <SelectContainer>
      <SelectInput onChange={onChange} value={value}>
        {children}
      </SelectInput>
      <MdKeyboardArrowDown />
    </SelectContainer>
  );
};

export default Select;
