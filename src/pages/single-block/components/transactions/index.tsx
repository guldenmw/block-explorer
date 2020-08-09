import React, { FC } from 'react';
import { ITransaction } from '../../../../modules/interfaces';

interface IProps {
  transactions: ITransaction[];
}

const Transactions: FC<IProps> = (props) => {
  const {
    transactions,
  } = props;

  return (
    <div>
      {/*{transactions?.map(tx => `${tx.txid}\n`)}*/}
    </div>
  );
};

Transactions.defaultProps = {};

export default Transactions;
