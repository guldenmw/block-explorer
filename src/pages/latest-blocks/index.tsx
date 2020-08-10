import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyledLatestBlocks } from './styles';
import Sidebar from './components/sidebar';
import BlocksTable from './components/blocks-table';
import { mapDispatchToProps, mapStateToProps } from './container';
import { ITableBlock, TSymbol } from '../../modules/interfaces';
import ErrorPage from '../error-page';


interface IProps {
  symbol: TSymbol;
  blocks: Array<ITableBlock>;
  isLoading: boolean;
  hasError: boolean;
  selectSymbol: (symbol: TSymbol) => void;
  fetchLatestBlocks: (symbol: TSymbol) => void;
}

/**
 * Page responsible for displaying the latest blocks of the
 * selected cryptocurrency option
 */
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
    <>
      {!hasError && (
        <StyledLatestBlocks>
          <Sidebar symbol={symbol} selectSymbol={selectSymbol}/>
          <BlocksTable symbol={symbol} blocks={blocks} isLoading={isLoading}/>
        </StyledLatestBlocks>
      )}

      {hasError && (
        <ErrorPage
          errorCode={''}
          errorMessage={'Could not load the latest blocks. Please try again later.'}
        />
      )}
    </>
  );
};

LatestBlocks.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LatestBlocks) as typeof LatestBlocks;
