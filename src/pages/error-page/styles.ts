import styled from 'styled-components';


export const StyledPageNotFound = styled.div<any>`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
  margin-top: 2.8rem;
  
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 60rem;
    margin-top: 10rem;
    
    .error-code {
      font-size: 6.25rem;
      margin-bottom: 0;
    }
    
    .error-message {
      font-size: 1.7rem;
    }
  }
`;
