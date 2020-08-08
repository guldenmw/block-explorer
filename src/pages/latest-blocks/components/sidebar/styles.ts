import styled from 'styled-components';


export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 410px;
  .page-title {
    padding-bottom: 20px;
  }

  .currency-option {
    display: flex;
    align-items: center;
    margin: 20px 15px;

    .options-details {
      display: flex;
      flex-direction: column;
      margin: 0 15px;
      font-size: 18px;
      
      .currency-price {
        color: #696969;
      }
    }
  }
`;
