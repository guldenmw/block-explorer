import React, { FC, useState } from 'react';
import { StyledTables } from './styles';
import { ITableBlock, TSymbol } from '../../../../modules/interfaces';
import { tableColumns } from '../../../../modules/constants';
import { useHistory } from 'react-router';


interface IProps {
  symbol: TSymbol;
  blocks: ITableBlock[];
}

const BlocksTable: FC<IProps> = (props) => {
  const {
    symbol,
    blocks,
  } = props;
  const [searchValue, setSearchValue] = useState<string>('');

  const history = useHistory();

  const handleHashClick = (blockHash: string) => {
    if (blockHash) {
      history.push(`/block/${blockHash}`);
    }
  }

  const cols = tableColumns[symbol] ? tableColumns[symbol] : tableColumns.default;

  return (
    <StyledTables>
      <header className={'search'}>
        <i className="fas fa-search"/>
        <input
          className={'search-bar form-control'}
          type={'text'}
          name={'search'}
          placeholder={'Search for a block hash'}
          onChange={e => setSearchValue(e?.target?.value)}
        />
        <button
          type="button"
          className={'search-button btn btn-primary'}
          onClick={e => handleHashClick(searchValue)}
        >
          Search
        </button>
      </header>
      <div className={'table-section-body'}>
        <h3 className={'table-title'}>Latest blocks</h3>
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
                      {key === 'hash' ? (
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
      </div>
    </StyledTables>
  );
};

BlocksTable.defaultProps = {};

export default BlocksTable;
