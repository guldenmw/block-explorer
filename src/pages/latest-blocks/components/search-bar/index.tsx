import React, { FC, useState } from 'react';
import { StyledSearchBar } from './styles';

interface IProps {
  onClick: (blockHash: string) => void;
}

const SearchBar: FC<IProps> = (props) => {
  const { onClick } = props;
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <StyledSearchBar>
      <i className="fas fa-search"/>
      <input
        className={'search-bar form-control'}
        type={'text'}
        name={'search'}
        placeholder={'Search for a block hash'}
        onChange={e => setSearchValue(e?.target?.value)}
      />
      <button
        type="button"
        className={'search-button btn btn-primary'}
        onClick={e => onClick(searchValue)}
      >
        Search
      </button>
    </StyledSearchBar>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
