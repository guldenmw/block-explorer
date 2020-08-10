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
    width: 7.5rem;
    height: 7.5rem;
    animation: grow 1.3s linear infinite;
  }
  
  @keyframes grow {
    0% {
      width: 1.25rem;
      height: 1.25rem;
    }
    50% {
      background-color: rgba(52, 152, 219, 0.7);
    }
    100% {
      width: 7.5rem;
      height: 7.5rem;
      background-color: rgba(52, 152, 219, 0);
    }
  }
`;
