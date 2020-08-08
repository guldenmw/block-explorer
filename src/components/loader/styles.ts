import styled from 'styled-components';


export const StyledLoader = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;

  .loader {
    border: 10px solid #fff;
    border-top: 10px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1.5s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
