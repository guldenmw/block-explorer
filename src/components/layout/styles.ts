import styled from 'styled-components';


export const StyledWrapper = styled.div<{ margin: number }>`
  display: flex;
  margin: ${p => `20px ${p?.margin}px`};
  font-family: 'Helvetica Neue', sans-serif;
`;
