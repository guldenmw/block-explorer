import React, { FC } from 'react';

import { ITableBlock, TSymbol } from '../../../../modules/interfaces';
import SearchBar from '../../../../components/search-bar';
import Loader from '../../../../components/loader';
import { StyledTables } from './styles';
import GridTable from '../grid-table';


interface IProps {
  symbol: TSymbol;
  blocks: ITableBlock[];
  isLoading: boolean;
  hasError: boolean;
}

/**
 * Component responsible for displaying the latest 20 blocks.
 * TODO: Add pagination
 */
const BlocksTable: FC<IProps> = (props) => {
  const {
    symbol,
    blocks,
    isLoading,
    hasError,
  } = props;

  return (
    <StyledTables>
      <SearchBar/>

      <div className={'table-section-body'}>
        <h3 className={'table-title'}>Latest blocks</h3>

        {isLoading && (
          <Loader/>
        )}

        {!isLoading && !hasError && (
          <GridTable symbol={symbol} blocks={blocks}/>
        )}

        {hasError && (
          <h4>
            Could not load the latest blocks. Please try again later.
          </h4>
        )}
      </div>
    </StyledTables>
  );
};

BlocksTable.defaultProps = {};

export default BlocksTable;
