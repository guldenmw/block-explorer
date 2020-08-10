import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { StyledSearchBar } from './styles';


/**
 * Search bar responsible for searching for specific blocks by hash
 */
const SearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const history = useHistory();

  const handleHashClick = () => {
    if (searchValue) {
      history.push(`/#/block/${searchValue}`);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleHashClick();
    }
  }

  return (
    <StyledSearchBar>
      <i className="fas fa-search"/>
      <input
        className={'search-bar form-control'}
        type={'text'}
        name={'search'}
        placeholder={'Search for a block hash'}
        onChange={e => setSearchValue(e?.target?.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        className={'search-button btn btn-primary'}
        onClick={handleHashClick}
      >
        Search
      </button>
    </StyledSearchBar>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
