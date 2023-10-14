import { StatisticsList } from 'components/Statictics/StatisticsList/StatisticsList';
import css from './Statistics.module.css';

export function Statictics({ title, statistics }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatisticsList statistics={statistics} />
    </section>
  );
}
