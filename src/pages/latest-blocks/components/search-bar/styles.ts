import styled from 'styled-components';


export const StyledSearchBar = styled.header`
  display: flex;
  align-items: center;
  position: relative; 
  width: 787px;
  
  .fas {
    position: absolute;
    padding: 20px;
    pointer-events: none;
    left: 0;
    font-size: 18px;
  }
  
  input  {
    padding: 0.8rem;
    padding-left: 50px;
    border: solid 1px #DFE3EB;
    border-radius: 5px;
    
    :focus {
      outline: none;
    }
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
    color: #fff;
    background-color: #007bff;
    border: solid 1px #007bff;
    border-radius: 5px;
    cursor: pointer;
    
    :hover {
      background-color: #0069d9;
      border-color: #0069d9;
    }
    
    :focus {
      outline: none;
      box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5);
    }
  }
`;
