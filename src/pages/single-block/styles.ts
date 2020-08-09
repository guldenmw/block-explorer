import styled from 'styled-components';


export const StyledSingleBlock = styled.div<any>`
  width: 100%;
  margin-top: 2.8rem;

  .page-header {
    margin-bottom: 3rem;
    
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
    margin-top: 5rem;
    
    h3 {
      margin-bottom: 4rem;
    }
  }
`;
