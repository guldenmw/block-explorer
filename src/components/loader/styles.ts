import styled from 'styled-components';


export const StyledLoader = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;

  .loader {
    border: 10px solid #fff;
    background-color: rgba(52, 152, 219, 1);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: grow 1.3s linear infinite;
  }
  
  @keyframes grow {
    0% {
      width: 20px;
      height: 20px;
    }
    50% {
      background-color: rgba(52, 152, 219, 0.7);
    }
    100% {
      width: 120px;
      height: 120px;
      background-color: rgba(52, 152, 219, 0);
    }
  }
`;
