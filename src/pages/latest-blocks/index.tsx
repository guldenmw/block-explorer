import React, { FC, useEffect } from 'react';
import { StyledLatestBlocks } from './styles';
import Sidebar from './components/sidebar';
import BlocksTable from './components/blocks-table';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { ITableBlock, TSymbols } from '../../modules/interfaces';


interface IProps {
  symbol: TSymbols;
  blocks: Array<ITableBlock>;
  selectSymbol: (symbol: TSymbols) => void;
  fetchLatestBlocks: (symbol: TSymbols) => void;
}

const LatestBlocks: FC<Partial<IProps>> = (props) => {
  const {
    symbol,
    blocks,
    selectSymbol,
    fetchLatestBlocks,
  } = props;

  useEffect(() => {
    fetchLatestBlocks(symbol);
  }, [symbol]);

  return (
    <StyledLatestBlocks>
      <Sidebar symbol={symbol} selectSymbol={selectSymbol}/>
      <BlocksTable blocks={blocks}/>
    </StyledLatestBlocks>
  );
};

LatestBlocks.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LatestBlocks);
