import styled from 'styled-components';


export const StyledLayout = styled.div<{ margin: number }>`
  display: flex;
  margin: ${p => `20px ${p?.margin}px`};
  font-family: 'Helvetica Neue', sans-serif;
`;
