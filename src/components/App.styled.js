import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;

  color: ${props => props.theme.colors.darkTextColor};
  background-color: ${props => props.theme.colors.primaryBgColor};
`;
