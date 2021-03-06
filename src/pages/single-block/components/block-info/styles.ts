import styled from 'styled-components';


export const StyledBlockInfo = styled.section`
  padding-bottom: 1rem;
  width: 75%;

  .block-details-row {
    display: grid;
    grid: auto / 2fr 5fr;
    padding: 0.8rem 0;
    border-bottom: solid 1px #DFE3EB;
    //flex: 1;
    
    .entry-key {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .entry-val {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
