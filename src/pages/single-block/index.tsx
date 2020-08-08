import React, { FC, useEffect } from 'react';
import { StyledSingleBlock } from './styles';
import BlockInfo from './components/block-info';
import { IBlock, TSymbol } from '../../modules/interfaces';
import { mapDispatchToProps, mapStateToProps } from './container';
import { connect } from 'react-redux';

interface IComponentProps {
  blockHash: string;
}

interface IContainerProps {
  symbol: TSymbol;
  currentBlock: IBlock;
  fetchBlock: (blockHash: string) => void;
}

type IProps = IComponentProps & Partial<IContainerProps>;

const SingleBlock: FC<IProps> = (props) => {
  const {
    symbol,
    blockHash,
    currentBlock,
    fetchBlock,
  } = props;

  useEffect(() => {
    fetchBlock(blockHash);
  }, [blockHash]);

  return (
    <StyledSingleBlock>
      <h2 className={'page-title'}>Block Explorer</h2>
      <BlockInfo currentBlock={currentBlock}/>
      {/*<Transactions transactions={currentBlock?.transactions}/>*/}
    </StyledSingleBlock>
  );
};

SingleBlock.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlock);
