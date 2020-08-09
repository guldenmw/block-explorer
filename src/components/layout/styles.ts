import styled from 'styled-components';


export const StyledLayout = styled.div<{ padding: number }>`
  display: flex;
  // padding: ${p => `0 ${p?.padding}px`};
  font-family: 'Inter', sans-serif;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  justify-content: center;
  
  .layout-body {
    width: 75rem;
    padding: 0 1.5rem;
  }
  
  //.layout-spacing {
  //  flex: 1;
  //}
`;
