// import { StatisticsList } from 'components/Statictics/StatisticsList/StatisticsList';
import { getRandomHexColor } from 'helpers/getRandomHexColor';
import css from './Statistics.module.css';

export function Statictics({ title, statistics }) {
  const statisticsList = statistics.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={css.statsItem}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statisticsWrapper}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>{statisticsList}</ul>
    </section>
  );
}
