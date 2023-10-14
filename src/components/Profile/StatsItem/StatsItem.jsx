import css from './StatsItem.module.css';

export function StatsItem({ statType, qty }) {
  return (
    <li className={css.statsItem}>
      <span className={css.label}>{statType}</span>
      <span className={css.qty}>{qty}</span>
    </li>
  );
}
