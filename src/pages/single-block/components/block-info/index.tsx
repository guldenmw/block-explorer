import React, { FC } from 'react';
import { StyledBlockInfo } from './styles';
import { IBlock, IEthBlock } from '../../../../modules/interfaces';

interface IProps {
  currentBlock: IBlock | IEthBlock | {};
}

const BlockInfo: FC<IProps> = (props) => {
  const { currentBlock } = props;
  return (
    <StyledBlockInfo>
      {currentBlock && Object?.entries(currentBlock)?.map(([key, val], index) => {
        if (!['transactions', 'tx'].includes(key)) {
          return (
            <div className={'block-details-row'} key={index}>
              <span className={'entry-key'}>{key}</span>
              <span className={'entry-val'}>{val}</span>
            </div>
          )
        }
      })}
    </StyledBlockInfo>
  );
};

BlockInfo.defaultProps = {};

export default BlockInfo;
