import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  background-color: var(--secondary-bg-color);
  box-shadow: 3px 3px 3px 0px var(--secondary-text-color);
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;
  text-transform: uppercase;
  color: var(--secondary-text-color);
  font-weight: 500;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  padding: 8px;

  border: 1px solid #d4d4d4;
  background-color: #e9eaee;
`;

export const Label = styled.span``;
export const Percentage = styled.span``;
