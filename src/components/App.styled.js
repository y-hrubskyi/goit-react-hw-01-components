import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(25)};
  min-height: 100vh;
  padding-top: ${p => p.theme.spacing(12)};
  padding-bottom: ${p => p.theme.spacing(12)};

  color: ${p => p.theme.colors.darkTextColor};

  background-color: ${p => p.theme.colors.primaryBgColor};
`;
