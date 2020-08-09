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
  }
  
  .tx-hash, .tx-time {
    padding-bottom: 10px;
  }
  
  .info-container {
    display: grid;
    grid: auto / 1fr 3fr;
    overflow: hidden;
  }
  
  .tx-input {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    
    .tx-hash-addr {
      display: flex;
      flex-direction: column;
      overflow: hidden;

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
    flex: 2;
    
    .tx-time, .tx-total {
      align-self: flex-end;
    }
    
    .tx-to-item {
      display: flex;
      justify-content: space-between;
    }
    
    .output-address {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .tx-total {
      margin-top: 1rem;
      padding: 4px;
      color: #00875a;
      background-color: #d1f0db;
      border-radius: 4px;
    }
  }
`;
