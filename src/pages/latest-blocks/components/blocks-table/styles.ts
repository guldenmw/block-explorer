import styled from 'styled-components';


export const StyledTables = styled.div<any>`
  display: flex;
  flex-direction: column;
  flex: 1;
  
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
  
  .table {
    thead {
      tr {
        th {
          border-top: none;
          text-transform: capitalize;
          padding-left: 0;
        }
        td {
          padding-left: 0;
        }
      }
    }
  }
`;
