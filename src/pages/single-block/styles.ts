import styled from 'styled-components';


export const StyledSingleBlock = styled.div<any>`
  width: 100%;

  .page-header {    margin-bottom: 2rem;
    
    .header-title {
      display: flex;
      align-items: center;
      padding: 0.5rem 0 1.5rem;
      border-bottom: solid 1px #DFE3EB;
      margin-bottom: 0.5rem;

      .page-title {
        margin: 0 1rem;
      }
    }
  }
  
  .transactions {
    margin-top: 3rem;
  }
`;
