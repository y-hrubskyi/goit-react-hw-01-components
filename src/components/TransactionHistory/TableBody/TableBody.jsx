import { TableRow } from 'components/TransactionHistory/TableRow/TableRow';

export function TableBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(transaction => (
        <TableRow key={transaction.id} transaction={transaction} />
      ))}
    </tbody>
  );
}
