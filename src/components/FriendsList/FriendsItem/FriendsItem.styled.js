import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  min-width: 200px;
  padding: 12px;

  background-color: var(--secondary-bg-color);
  box-shadow: 2px 2px 2px 0px var(--secondary-text-color);
  border-radius: 10px;
  overflow: hidden;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;

  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
