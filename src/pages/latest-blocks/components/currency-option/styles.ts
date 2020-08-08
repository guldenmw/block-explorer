import styled from 'styled-components';


export const StyledOption = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  border-radius: 5px;
  max-width: 220px;
  
  &.selected {
    background-color: #ececec;
  }
  
  .option-icon {
    cursor: pointer;
  }

  .option-details {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    font-size: 18px;
    cursor: pointer;
    
    .currency-price {
      color: #696969;
    }
  }
`;
