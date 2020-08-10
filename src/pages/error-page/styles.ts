import styled from 'styled-components';


export const StyledPageNotFound = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  
  .error-code {
    font-size: 100px;
    margin-bottom: 0;
    line-height: 1;
  }
  
  .error-message {
    font-size: 27px;
  }
`;
