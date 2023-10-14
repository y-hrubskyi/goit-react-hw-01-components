import { TableHead } from 'components/TransactionHistory/TableHead/TableHead';
import { TableBody } from 'components/TransactionHistory/TableBody/TableBody';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <TableHead />
      <TableBody transactions={transactions} />
    </table>
  );
}
