import styled from 'styled-components';


export const StyledTransaction = styled.div<any>`
  display: grid;
  grid: auto / minmax(0, 4fr) 1fr minmax(0, 4fr);
  border-bottom: solid 1px #DFE3EB;
  padding: 1.3rem 1rem 3rem;
  
  :hover {
    background-color: #DFE3EB;
  }
  
  .light {
    color: #677185;
    flex: 1;
 }
  
  .tx-hash, .tx-time {
    padding-bottom: 10px;
  }
  
  .info-container {
    display: flex;
    overflow: hidden;
  }
  
  .tx-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .tx-hash-addr {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex: 3;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    
    .coinbase {
      color: #00875A;
    }
  }
  
  .tx-arrow {
    margin-top: 30px;
    margin-left: 25px;

    svg {
      width: 24px;
      height: 24px;
      fill: #349E7B;
    }
  }
  
  .tx-output {
    display: flex;
    flex-direction: column;
    
    .tx-to-item {
      display: flex;
      justify-content: space-between;
    
      .output-address {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .tx-value-container {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        
        .tx-value {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 0.5rem;
        }
      
        .fa-globe { color: #339f7b; }
        .fa-globe.spent { color: #ea5b50; }
      }
    }
    
    .tx-time, .tx-total, .tx-confirmations {
      align-self: flex-end;
    }
    
    .tx-total {
      color: #00875a;
      background-color: #d1f0db;
    }
    
    .tx-confirmations {
      color: #0c6cf2;
      background: #bbdbfc;
    }
    
    .tx-total, .tx-confirmations {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 8.1rem;
      margin-top: 1rem;
      padding: 4px;
      border-radius: 4px;
    }
  }
`;
