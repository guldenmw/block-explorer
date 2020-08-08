import React, { FC, useEffect } from 'react';
import { StyledLatestBlocks } from './styles';
import Sidebar from './components/sidebar';
import BlocksTable from './components/blocks-table';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { ITableBlock, TSymbols } from '../../modules/interfaces';
import Loader from '../../components/loader';


interface IProps {
  symbol: TSymbols;
  blocks: Array<ITableBlock>;
  isLoading: boolean;
  hasError: boolean;
  selectSymbol: (symbol: TSymbols) => void;
  fetchLatestBlocks: (symbol: TSymbols) => void;
}

const LatestBlocks: FC<Partial<IProps>> = (props) => {
  const {
    symbol,
    blocks,
    isLoading,
    hasError,
    selectSymbol,
    fetchLatestBlocks,
  } = props;

  useEffect(() => {
    fetchLatestBlocks(symbol);
  }, [symbol]);

  return (
    <StyledLatestBlocks>
      {isLoading && (
        <Loader/>
      )}
      {!isLoading && !hasError && (
        <>
          <Sidebar symbol={symbol} selectSymbol={selectSymbol}/>
          <BlocksTable symbol={symbol} blocks={blocks}/>
        </>
      )}

    </StyledLatestBlocks>
  );
};

LatestBlocks.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LatestBlocks);
