import React, { FC } from 'react';
import { StyledLatestBlocks } from './styles';
import Sidebar from './components/sidebar';
import BlocksTable from './components/blocks-table';

interface IProps {
  [x: string]: any;
}

const LatestBlocks: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledLatestBlocks>
      <Sidebar/>
      <BlocksTable/>
    </StyledLatestBlocks>
  );
};

LatestBlocks.defaultProps = {};

export default LatestBlocks;
