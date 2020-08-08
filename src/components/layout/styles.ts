import styled from 'styled-components';


export const StyledLayout = styled.div<{ padding: number }>`
  display: flex;
  padding: ${p => `0 ${p?.padding}px`};
  font-family: 'Helvetica Neue', sans-serif;
  height: 100%;
`;
