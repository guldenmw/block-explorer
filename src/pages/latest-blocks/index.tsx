import React, { FC } from 'react';
import Header from './components/header';
import { StyledLatestBlocks } from './styles';

interface IProps {
  [x: string]: any;
}

const LatestBlocks: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledLatestBlocks>
      <Header/>
    </StyledLatestBlocks>
  );
};

LatestBlocks.defaultProps = {};

export default LatestBlocks;
