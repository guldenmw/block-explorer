import styled from 'styled-components';


export const StyledOption = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  max-width: 13.75rem;
  cursor: pointer;

  &.selected {
    background-color: #ececec;
  }
  
  &:first-child {
    margin-top: 0;
  }
  
  .option-details {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    font-size: 18px;
    
    .currency-price {
      color: #696969;
    }
  }
`;
