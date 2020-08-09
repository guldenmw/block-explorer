import React, { FC } from 'react';
import { StyledBlockInfo } from './styles';
import { IBlock, IEthBlock } from '../../../../modules/interfaces';


const formatKeyForDisplay = (key) => {
  return key.replace(/(?<![0-9])([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

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
              <span className={'entry-key'}>{formatKeyForDisplay(key)}</span>
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
