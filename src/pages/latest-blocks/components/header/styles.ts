import styled from 'styled-components';


export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex: 1;
  
  .page-title {
    flex: 1;
  }
  
  .search {
    display: flex;
    align-items: center;

    .search-bar {
      flex: 1;
    }
  
    .search-button {
      width: 50px;
    }
  }
`;
