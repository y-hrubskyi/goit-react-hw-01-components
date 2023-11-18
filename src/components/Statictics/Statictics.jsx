import PropTypes from 'prop-types';

import {
  StatisticsItem,
  StatisticsList,
  StatisticsWrapper,
  Title,
} from './Statistics.styled';

export function Statictics({ title, statistics }) {
  const statisticsList = statistics.map(({ id, label, percentage }) => (
    <StatisticsItem key={id}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatisticsItem>
  ));

  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatisticsList>{statisticsList}</StatisticsList>
    </StatisticsWrapper>
  );
}

Statictics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
