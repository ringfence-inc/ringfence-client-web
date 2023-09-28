import styled, { css } from "styled-components";

// Styled components
export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
`;

export const TBody = styled.tbody`
  tr:first-child td:first-child {
    border-top-left-radius: 4px;
  }
  tr:first-child td:last-child {
    border-top-right-radius: 4px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 4px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 4px;
  }

  tr:first-child td {
    border-top-style: solid;
  }
  tr td:first-child {
    border-left-style: solid;
  }
`;

export const TR = styled.tr`
  ${({ theme }) => css``};
`;

export const TD = styled.td`
  ${({ theme }) => css`
    padding: ${theme.m.sm};
    border: 1px solid ${theme.color.midGrey};
    border-style: none none solid none;
    &:last-child {
      border-right-style: solid;
    }
  `};
`;
