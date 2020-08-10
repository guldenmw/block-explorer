import React, { FC } from 'react';
import { StyledTables } from './styles';
import { ITableBlock, TSymbol } from '../../../../modules/interfaces';
import { tableColumns } from '../../../../modules/constants';
import SearchBar from '../../../../components/search-bar';
import Loader from '../../../../components/loader';


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

  const cols = tableColumns[symbol] ? tableColumns[symbol] : tableColumns.default;

  return (
    <StyledTables>
      <SearchBar/>
      <div className={'table-section-body'}>
        <h3 className={'table-title'}>Latest blocks</h3>
        {isLoading && (
          <Loader/>
        )}
        {!isLoading && (
          <div className={'table-container'}>
          <table className={'table'} width="100%">
            <thead>
              <tr >
                {cols?.map((col, index) => (
                  <th key={index}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blocks.map((block, index) => (
                <tr key={index}>
                  {cols?.map((key, index) => (
                    <td
                      key={index}
                      className={key === 'hash' ? 'hash-col' : ''}
                    >
                      {key === 'hash' || key === 'height' || key === 'number' ? (
                        <a href={`/block/${block?.hash}`}>{block[key]}</a>
                      ) : (
                        block[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </StyledTables>
  );
};

BlocksTable.defaultProps = {};

export default BlocksTable;
