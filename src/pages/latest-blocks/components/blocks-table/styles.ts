import styled from 'styled-components';


export const StyledTables = styled.section`
  display: flex;
  flex-direction: column;
  width: 60rem;
  
  .table-section-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
  }
  
  .table-title {
    padding: 2.5rem 0;
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
        overflow-x: hidden;
        max-width: 0.8px;
        min-width: 8rem;
      }

      .hash-col {
        max-width: 18.75rem;
      }

      .number-col, .height-col {
        min-width: 7.2rem;
      }
    }
  }
  
  
`;
