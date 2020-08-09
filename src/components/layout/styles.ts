import styled from 'styled-components';


export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  
  .layout-header {
    width: 100%;
    background-color: #121d33;
    flex: 0 0 4rem;
    margin-bottom: 2rem;
  }
  
  .layout-body {
    max-width: 75rem;
    padding: 0 1.5rem;
    display: flex;
    flex: 1;
  }
`;
