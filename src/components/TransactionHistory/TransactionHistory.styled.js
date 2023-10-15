import styled from 'styled-components';

export const TransactionsTable = styled.table`
  border: 1px solid var(--secondary-text-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 0px var(--secondary-text-color);

  border-spacing: 1px;
`;

export const THead = styled.thead`
  font-size: 18px;
  text-transform: uppercase;
  color: var(--light-text-color);

  background-color: #507ddd;
`;

export const THeadRow = styled.tr``;

export const THeadCell = styled.th`
  min-width: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const TBody = styled.tbody``;

export const TBodyRow = styled.tr`
  &:nth-child(odd) {
    background-color: var(--secondary-bg-color);
  }
  &:nth-child(even) {
    background-color: var(--primary-bg-color);
  }
`;

export const TBodyData = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;

  text-align: center;
  text-transform: capitalize;
  color: var(--secondary-text-color);
`;
