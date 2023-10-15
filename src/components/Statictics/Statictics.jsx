import { getRandomHexColor } from 'helpers/getRandomHexColor';
import {
  Label,
  Percentage,
  StatisticsItem,
  StatisticsList,
  StatisticsWrapper,
  Title,
} from './Statistics.styled';

export function Statictics({ title, statistics }) {
  const statisticsList = statistics.map(({ id, label, percentage }) => (
    <StatisticsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsItem>
  ));

  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatisticsList>{statisticsList}</StatisticsList>
    </StatisticsWrapper>
  );
}
