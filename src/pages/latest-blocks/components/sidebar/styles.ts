import styled from 'styled-components';


export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 410px;

  .page-title {
    padding-bottom: 20px;
  }
  
  .currency-options {
    display: flex;
    flex-direction: column;

    .currency-option {
      display: flex;
      align-items: center;
      margin: 20px 15px;
      
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
    }
  }
`;
