import { StatisticsItem } from 'components/Statictics/StatisticsItem/StatisticsItem';
import css from './StatisticsList.module.css';

export function StatisticsList({ statistics }) {
  return (
    <ul className={css.statList}>
      {statistics.map(stat => (
        <StatisticsItem key={stat.id} stat={stat} />
      ))}
    </ul>
  );
}
