import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: var(--secondary-bg-color);
  box-shadow: 3px 3px 3px 0px var(--secondary-text-color);
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  padding: 20px;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Tag = styled.p`
  color: var(--secondary-text-color);
`;

export const Location = styled.p`
  color: var(--secondary-text-color);
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 96px;
  padding: 12px;

  border: 1px solid #d4d4d4;
  background-color: #e9eaee;
`;

export const Label = styled.span`
  text-transform: capitalize;
  color: var(--secondary-text-color);
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
