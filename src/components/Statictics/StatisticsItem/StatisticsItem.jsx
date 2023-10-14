import css from './StatisticsItem.module.css';

export function StatisticsItem({ stat }) {
  return (
    <li className={css.statsItem}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
  );
}
