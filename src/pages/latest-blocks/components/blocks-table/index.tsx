import React, { FC, useEffect } from 'react';
import { StyledTables } from './styles';
import { ITableBlock, TSymbols } from '../../../../modules/interfaces';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { accessors } from '../../../../modules/constants';

interface IComponentProps {
  symbol?: TSymbols;
}

interface IContainerProps {
  blocks: Array<ITableBlock>;
  fetchLatestBlocks: (symbol: TSymbols) => void;
}

type TProps = IComponentProps & Partial<IContainerProps>;

const BlocksTable: FC<TProps> = (props) => {
  const {
    symbol,
    blocks,
    fetchLatestBlocks,
  } = props;

  useEffect(() => {
    fetchLatestBlocks(symbol);
  }, []);

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
                <td key={index}>
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
