import React, { FC } from 'react';
import { StyledBlockInfo } from './styles';
import { IBlock } from '../../../../modules/interfaces';

interface IProps {
  currentBlock: IBlock;
}

const BlockInfo: FC<IProps> = (props) => {
  const { currentBlock } = props;
  return (
    <StyledBlockInfo>
      {currentBlock?.hash}
    </StyledBlockInfo>
  );
};

BlockInfo.defaultProps = {};

export default BlockInfo;
