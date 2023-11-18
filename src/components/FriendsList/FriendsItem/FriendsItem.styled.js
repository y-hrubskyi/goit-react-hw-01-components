import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};

  min-width: 224px;
  padding: 12px;

  background-color: ${props => props.theme.colors.secondaryBgColor};
  box-shadow: 2px 2px 2px 0px ${props => props.theme.colors.secondaryTextColor};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.sm};
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
