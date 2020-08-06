import React, { FC } from 'react';
import { StyledWrapper } from './styles';

interface IProps {
  [x: string]: any;
}

const Header: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledWrapper>
      <h2 className={'page-title'}>Block Explorer</h2>
      <div className={'search'}>
        <input className={'search-bar'} type={'text'} name={'search'} placeholder={'Search for a block hash'}/>
        <button className={'search-button'}>Search</button>
      </div>
    </StyledWrapper>
  );
};

Header.defaultProps = {};

export default Header;
