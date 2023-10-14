import css from './TableHead.module.css';

export function TableHead() {
  return (
    <thead className={css.tHead}>
      <tr className={css.tRow}>
        <th className={css.tCell}>Type</th>
        <th className={css.tCell}>Amount</th>
        <th className={css.tCell}>Currency</th>
      </tr>
    </thead>
  );
}
