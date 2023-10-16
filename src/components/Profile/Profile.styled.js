import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: ${props => props.theme.colors.secondaryBgColor};
  box-shadow: 3px 3px 3px 0px ${props => props.theme.colors.secondaryTextColor};
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
  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.secondaryTextColor};
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
  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
