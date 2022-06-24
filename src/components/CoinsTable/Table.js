import { styled } from "@mui/material/styles";
import { default as MuiTable } from "@mui/material/Table";
import { default as MuiTableContainer } from "@mui/material/TableContainer";
import { default as MuiTableHead } from "@mui/material/TableHead";
import { default as MuiTableBody } from "@mui/material/TableBody";
import { default as MuiTableRow } from "@mui/material/TableRow";
import { default as MuiTableCell } from "@mui/material/TableCell";

export const TableContainer = styled(MuiTableContainer)``;

export const Table = styled(MuiTable)``;

export const TableHead = styled(MuiTableHead)`
  & th {
    background-color: var(--primary-text-color);
    color: var(--primary-background-color);
    cursor: default;
  }
`;

export const TableBody = styled(MuiTableBody)``;

export const TableRow = styled(MuiTableRow)`
  &:hover {
    cursor: pointer;
    background-color: var(--secondary-background-color);
  }
`;

export const TableCell = styled(MuiTableCell)`
  font-weight: 700;
  font-size: 1.1rem;
  font-family: inherit;
  color: var(--secondary-text-color);
  border-color: var(--secondary-background-color);
`;
