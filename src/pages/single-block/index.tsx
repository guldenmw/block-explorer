import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { StyledSingleBlock } from './styles';
import Transactions from './components/transactions';
import BlockInfo from './components/block-info';
import { IBlock, ITransaction } from '../../modules/interfaces';
import { mapDispatchToProps, mapStateToProps } from './container';
import { connect } from 'react-redux';

interface IProps {
  currentBlock: IBlock;
  transactions: ITransaction[];
  fetchTransactions: (blockHash: string) => void;
}

const SingleBlock: FC<Partial<IProps>> = (props) => {
  const {
    currentBlock,
    transactions,
    fetchTransactions,
  } = props;

  const { blockHash } = useParams();

  useEffect(() => {
    fetchTransactions(blockHash);
  }, [blockHash]);

  return (
    <StyledSingleBlock>
      <h2 className={'page-title'}>Block Explorer</h2>
      <BlockInfo currentBlock={currentBlock}/>
      <Transactions transactions={transactions}/>
    </StyledSingleBlock>
  );
};

SingleBlock.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlock);
