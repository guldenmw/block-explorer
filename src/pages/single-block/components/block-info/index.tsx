import React, { FC } from 'react';

import { IBlock, IEthBlock } from '../../../../modules/interfaces';
import { StyledBlockInfo } from './styles';


const formatKeyForDisplay = (key) => {
  return key.replace(/(?<![0-9])([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

interface IProps {
  block: IBlock | IEthBlock | any;
}

/**
 * Section displaying block specific information
 */
const BlockInfo: FC<IProps> = (props) => {
  const { block } = props;
  return (
    <StyledBlockInfo>
      {block && Object?.entries(block)?.map(([key, val], index) => {
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
