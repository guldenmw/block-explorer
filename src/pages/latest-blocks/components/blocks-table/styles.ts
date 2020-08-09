import styled from 'styled-components';


export const StyledTables = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  .table-section-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
  }
  
  .search {
    display: flex;
    align-items: center;
    position: relative; 
    
    .fas {
      position: absolute;
      padding: 20px;
      pointer-events: none;
      left: 0;
      font-size: 18px;
    }
    
    input  {
      padding: 25px;
      padding-left: 50px;
    }

    .search-bar {
      flex: 1;
    }
  
    .search-button {
      height: 100%;
      margin: 0 10px;
      min-width: 160px;
      font-size: 18px;
      font-weight: bold;
    }
  }
  
  .table-title {
    padding: 40px 0;
  }
  
  .table-container {
    overflow-x: auto;
  }

  .table {
    border-collapse: collapse;
    
    th, td {
      padding-right: 3rem;
    }

    thead tr th {
      border-top: none;
      text-transform: capitalize;
      border-bottom: solid 1px #DFE3EB;
      padding: 0.8rem 0;
    }
    tbody tr {
      td {
        border-bottom: solid 1px #DFE3EB;
        padding: 0.8rem 3rem 0.8rem 0;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .hash-col {
        overflow-x: hidden;
        max-width: 300px;
      }
    }
  }
`;
