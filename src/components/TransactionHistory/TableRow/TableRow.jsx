import css from './TableRow.module.css';

export function TableRow({ transaction }) {
  return (
    <tr className={css.tRow}>
      <td className={css.tData}>{transaction.type}</td>
      <td className={css.tData}>{transaction.amount}</td>
      <td className={css.tData}>{transaction.currency}</td>
    </tr>
  );
}
