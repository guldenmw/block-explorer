import styled from 'styled-components';


export const StyledTransaction = styled.div<any>`
  display: grid;
  grid: auto / minmax(0, 4fr) 1fr minmax(0, 4fr);
  border-bottom: solid 1px #DFE3EB;
  padding: 20px 0 40px;
  
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
  }
  
  .tx-arrow {
    margin-top: 20px;
    margin-left: 25px;
    svg {
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
  }
`;
