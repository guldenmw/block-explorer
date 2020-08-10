import styled, { css } from 'styled-components';


export const StyledGridTable = styled.div<any>`
  display: grid;
  ${({ symbol }) => symbol === 'eth' ? css`
    grid: auto / 7.2rem 2fr 1fr 2fr 1fr 1fr;
  ` : css`
    grid: auto / 7.2rem 2fr 1fr 1fr 1fr;
  `}; 
  
  .column {
    border-top: none;
    text-transform: capitalize;
    border-bottom: solid 1px #DFE3EB;
    padding: 0.8rem 0;
    font-weight: bold;
  }
  
  .row {
    border-bottom: solid 1px #DFE3EB;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    padding: 0.8rem 1rem 0.8rem 0;
  }
`;
