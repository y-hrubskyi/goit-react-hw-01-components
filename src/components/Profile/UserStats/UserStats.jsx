import { StatsItem } from 'components/Profile/StatsItem/StatsItem';
import css from './UserStats.module.css';

export function UserStats({ stats }) {
  const statsEntries = Object.entries(stats);

  return (
    <ul className={css.stats}>
      {statsEntries.map(stat => (
        <StatsItem key={stat[0]} statType={stat[0]} qty={stat[1]} />
      ))}
    </ul>
  );
}
