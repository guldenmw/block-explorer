import styled from 'styled-components';


export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  
  .layout-header {
    position: fixed;
    display: flex;
    width: 100%;
    background-color: #121d33;
    flex: 0 0 4rem;
    align-items: center;
    padding-left: 3.5rem;
    height: 4.25rem;
    z-index: 1;
    
    a {
      :hover {
        text-decoration: none;
      }
    }
    
    h2 {
      margin: 0;
      color: #fff;
    }
  }
  
  .layout-body {
    max-width: 80rem;
    padding: 0 1.5rem;
    display: flex;
    flex: 1;
    margin-top: 4.2rem;
    overflow: ${p => p.hideOverflow ? 'hidden' : 'auto'};
  }
`;
