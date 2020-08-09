import styled from 'styled-components';


export const StyledLayout = styled.div<{ padding: number }>`
  display: flex;
  padding: ${p => `0 ${p?.padding}px`};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  height: 100%;
  width: 100%;
`;
