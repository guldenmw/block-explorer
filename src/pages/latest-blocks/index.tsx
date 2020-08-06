import React, { FC } from 'react';
import Header from './components/header';
import { StyledWrapper } from './styles';

interface IProps {
  [x: string]: any;
}

const LatestBlocks: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledWrapper>
      <Header/>
    </StyledWrapper>
  );
};

LatestBlocks.defaultProps = {};

export default LatestBlocks;
