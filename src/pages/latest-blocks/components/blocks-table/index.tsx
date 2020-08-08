import React, { FC } from 'react';
import { StyledTables } from './styles';
import { ITableBlock } from '../../../../modules/interfaces';
import { accessors } from '../../../../modules/constants';
import { useHistory } from 'react-router';


interface IProps {
  blocks: ITableBlock[];
}

const BlocksTable: FC<IProps> = (props) => {
  const {
    blocks,
  } = props;

  const history = useHistory();

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

BlocksTable.defaultProps = {};

export default BlocksTable;
