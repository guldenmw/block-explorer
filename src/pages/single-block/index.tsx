import React, { FC, useEffect } from 'react';
import { StyledSingleBlock } from './styles';
import BlockInfo from './components/block-info';
import { IBlock, TSymbol } from '../../modules/interfaces';
import { mapDispatchToProps, mapStateToProps } from './container';
import { connect } from 'react-redux';
import checkSymbol from '../../modules/api/check-symbol';

interface IComponentProps {
  blockHash: string;
}

interface IContainerProps {
  symbol: TSymbol;
  currentBlock: IBlock;
  selectSymbol: (symbol: TSymbol) => void;
  fetchBlock: (blockHash: string) => void;
}

type IProps = IComponentProps & Partial<IContainerProps>;

const SingleBlock: FC<IProps> = (props) => {
  const {
    symbol,
    blockHash,
    currentBlock,
    selectSymbol,
    fetchBlock,
  } = props;

  // Figure out what currency we have to search for.
  useEffect(() => {
    checkSymbol(blockHash).then((result) => selectSymbol(result));
  }, []);

  useEffect(() => {
    if (symbol) {
      fetchBlock(blockHash);
    }
  }, [blockHash, symbol]);

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
