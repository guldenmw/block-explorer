import React, { FC, useEffect } from 'react';
import { StyledTables } from './styles';
import { ITableBlock, TSymbols } from '../../../../modules/interfaces';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { accessors } from '../../../../modules/constants';
import { useHistory } from 'react-router';


interface IProps {
  symbol: TSymbols;
  blocks: Array<ITableBlock>;
  fetchLatestBlocks: (symbol: TSymbols) => void;
}

const BlocksTable: FC<Partial<IProps>> = (props) => {
  const {
    symbol,
    blocks,
    fetchLatestBlocks,
  } = props;

  const history = useHistory();

  useEffect(() => {
    fetchLatestBlocks(symbol);
  }, [symbol]);

  const handleHashClick = (blockHash: string) => {
    history.push(`/block/${blockHash}`);
  }

  return (
    <StyledTables>
      <div className={'search'}>
        <i className="fas fa-search"/>
        <input className={'search-bar form-control'} type={'text'} name={'search'} placeholder={'Search for a block hash'}>
        </input>
        <button type="button" className={'search-button btn btn-primary'}>Search</button>
      </div>
      <h3 className={'table-title'}>Latest blocks</h3>
      <table className={'table'}>
        <thead>
          <tr >
            {accessors?.map((col, index) => (
              <th key={index}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) => (
            <tr key={index}>
              {accessors?.map((key, index) => (
                <td
                  key={index}
                  className={key === 'hash' ? 'hash-col' : ''}
                  onClick={key === 'hash' ? e => handleHashClick(block?.hash) : null}
                >
                  {block[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTables>
  );
};

BlocksTable.defaultProps = {
  symbol: 'btc',
};

export default connect(mapStateToProps, mapDispatchToProps)(BlocksTable) as typeof BlocksTable;
