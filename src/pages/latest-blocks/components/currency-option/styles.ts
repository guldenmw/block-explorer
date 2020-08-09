import styled from 'styled-components';


export const StyledOption = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  max-width: 220px;
  cursor: pointer;

  &.selected {
    background-color: #ececec;
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
