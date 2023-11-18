import styled from 'styled-components';

export const FriendsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
`;
