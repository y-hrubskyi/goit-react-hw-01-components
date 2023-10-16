import styled from 'styled-components';

export const TransactionsTable = styled.table`
  border: 1px solid ${props => props.theme.colors.secondaryTextColor};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 0px ${props => props.theme.colors.secondaryTextColor};

  border-spacing: 1px;
`;

export const THead = styled.thead`
  font-size: 18px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.lightTextColor};

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
    background-color: ${props => props.theme.colors.secondaryBgColor};
  }
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.primaryBgColor};
  }
`;

export const TBodyData = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;

  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.secondaryTextColor};
`;
