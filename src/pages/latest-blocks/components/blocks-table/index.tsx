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
  } = props;

  return (
    <StyledTables>
      <SearchBar/>

      <div className={'table-section-body'}>
        <h3 className={'table-title'}>Latest blocks</h3>

        {isLoading && (
          <Loader/>
        )}

        {!isLoading && (
          <GridTable symbol={symbol} blocks={blocks}/>
        )}

      </div>
    </StyledTables>
  );
};

BlocksTable.defaultProps = {};

export default BlocksTable;
