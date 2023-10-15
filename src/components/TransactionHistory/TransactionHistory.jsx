// import { TableHead } from 'components/TransactionHistory/TableHead/TableHead';
// import { TableBody } from 'components/TransactionHistory/TableBody/TableBody';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  const tBodyRows = transactions.map(({ id, type, amount, currency }) => (
    <tr key={id} className={css.tRow}>
      <td className={css.tData}>{type}</td>
      <td className={css.tData}>{amount}</td>
      <td className={css.tData}>{currency}</td>
    </tr>
  ));

  return (
    <table className={css.transactionsTable}>
      <thead className={css.tHead}>
        <tr>
          <th className={css.tHeadCell}>Type</th>
          <th className={css.tHeadCell}>Amount</th>
          <th className={css.tHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody>{tBodyRows}</tbody>
    </table>
  );
}
