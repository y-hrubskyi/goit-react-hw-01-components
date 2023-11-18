import styled from 'styled-components';

export const TransactionsTable = styled.table`
  border: 1px solid ${props => props.theme.colors.secondaryTextColor};
  border-radius: ${p => p.theme.radii.md};
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
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};
`;

export const TBodyRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.secondaryBgColor};
  }
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.primaryBgColor};
  }
`;

export const TBodyData = styled.td`
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};

  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.secondaryTextColor};
`;
