import React, { FC, Fragment } from 'react';

import { ITableBlock, TSymbol } from '../../../../modules/interfaces';
import { tableColumns } from '../../../../modules/constants';
import { StyledGridTable } from './styles';


interface IProps {
  symbol: TSymbol;
  blocks: ITableBlock[];
}

/**
 * CSS Grid based component responsible for rendering latest blocks table
 * @param props
 * @constructor
 */
const GridTable: FC<IProps> = (props) => {
  const { symbol, blocks } = props;

  const columns = tableColumns[symbol] ? tableColumns[symbol] : tableColumns.default;

  return (
    <StyledGridTable symbol={symbol}>
      {columns?.map((col, index) => (
        <span className={'column'} key={index}>
          {col}
        </span>
      ))}

      {blocks.map((block, index) => (
        <Fragment key={index}>
          {columns?.map((key, index) => (
            <span
              key={index}
              className={`row ${key}-row`}
            >
              {key === 'hash' || key === 'height' || key === 'number' ? (
                <a href={`/block/${block?.hash}`}>{block[key]}</a>
              ) : (
                block[key]
              )}
            </span>
          ))}
        </Fragment>
      ))}

    </StyledGridTable>
  );
};

GridTable.defaultProps = {};

export default GridTable;
