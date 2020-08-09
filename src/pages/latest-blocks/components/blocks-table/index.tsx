import React, { FC } from 'react';
import { StyledTables } from './styles';
import { ITableBlock, TSymbol } from '../../../../modules/interfaces';
import { tableColumns } from '../../../../modules/constants';
import { useHistory } from 'react-router';
import SearchBar from '../search-bar';
import Loader from '../../../../components/loader';


interface IProps {
  symbol: TSymbol;
  blocks: ITableBlock[];
  isLoading: boolean;
}

const BlocksTable: FC<IProps> = (props) => {
  const {
    symbol,
    blocks,
    isLoading,
  } = props;

  const history = useHistory();

  const handleHashClick = (blockHash: string) => {
    if (blockHash) {
      history.push(`/block/${blockHash}`);
    }
  }

  const cols = tableColumns[symbol] ? tableColumns[symbol] : tableColumns.default;

  return (
    <StyledTables>
      <SearchBar onClick={handleHashClick}/>
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
