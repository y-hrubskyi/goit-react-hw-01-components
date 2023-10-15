import {
  TBody,
  TBodyData,
  TBodyRow,
  THead,
  THeadCell,
  THeadRow,
  TransactionsTable,
} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  const tBodyRows = transactions.map(({ id, type, amount, currency }) => (
    <TBodyRow key={id}>
      <TBodyData>{type}</TBodyData>
      <TBodyData>{amount}</TBodyData>
      <TBodyData>{currency}</TBodyData>
    </TBodyRow>
  ));

  return (
    <TransactionsTable>
      <THead>
        <THeadRow>
          <THeadCell>Type</THeadCell>
          <THeadCell>Amount</THeadCell>
          <THeadCell>Currency</THeadCell>
        </THeadRow>
      </THead>

      <TBody>{tBodyRows}</TBody>
    </TransactionsTable>
  );
}
