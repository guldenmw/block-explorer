import React, { FC } from 'react';
import { StyledHeader } from './styles';

interface IProps {
  [x: string]: any;
}

const Header: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledHeader>
      <h2 className={'page-title'}>Block Explorer</h2>
      <div className={'search'}>
        <input className={'search-bar'} type={'text'} name={'search'} placeholder={'Search for a block hash'}/>
        <button className={'search-button'}>Search</button>
      </div>
    </StyledHeader>
  );
};

Header.defaultProps = {};

export default Header;
