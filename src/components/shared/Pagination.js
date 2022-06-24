import { styled } from "@mui/system";
import { default as MuiPagination } from "@mui/material/Pagination";

const Pagination = styled(MuiPagination)`
  &.MuiPagination-root {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  & .MuiButtonBase-root {
    color: var(--primary-text-color);
    font-family: inherit;
    font-weight: 700;
  }

  & .MuiPaginationItem-root:hover {
    background-color: var(--secondary-neutral-color);
  }

  & .MuiPaginationItem-root.Mui-selected {
    background-color: var(--primary-neutral-color);
  }

  & .MuiPaginationItem-text {
    color: inherit;
  }
`;

export default Pagination;
