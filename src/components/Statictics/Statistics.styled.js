import { getRandomHexColor } from 'helpers/getRandomHexColor';
import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  background-color: ${props => props.theme.colors.secondaryBgColor};
  box-shadow: 3px 3px 3px 0px ${props => props.theme.colors.secondaryTextColor};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};

  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 64px;
  padding: ${p => p.theme.spacing(2)};

  border: 1px solid #d4d4d4;
  background-color: ${() => getRandomHexColor()};
`;
