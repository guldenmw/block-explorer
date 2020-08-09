import React, { FC } from 'react';
import { StyledTransaction } from './styles';
import { ITransaction, TSymbol } from '../../../../modules/interfaces';
import ArrowIcon from '../../../../components/icons/arrow-icon';

interface IProps {
  symbol: TSymbol;
  transaction: ITransaction;
  confirmations: number;
}

const Transaction: FC<IProps> = (props) => {
  const { symbol, transaction, confirmations } = props;

  return (
    <StyledTransaction>
      <div className={'tx-input'}>
        <div className={'info-container'}>
          <span className={'light'}>Hash</span>

          <div className={'tx-hash-addr'}>
            <span className={'tx-hash'}>
              {transaction?.hash}
            </span>

            <span>
              {transaction?.coinbase ? <span className={'coinbase'}>COINBASE (Newly Generated Coins)</span> : transaction?.from}
            </span>
          </div>
        </div>

        <div className={'info-container'}>
          <span className={'light'}>Fee</span>
          <span>
            {transaction?.fee}
          </span>
        </div>

      </div>

      <div className={'tx-arrow'}>
        <ArrowIcon/>
      </div>

      <div className={'tx-output'}>
        <span className={'tx-time'}>{transaction?.time}</span>

        {transaction?.to?.map((tx, index) => (
          <div className={'tx-to-item'} key={index}>
            <span className={'output-address'}>
              {tx?.address ? tx?.address : 'OP_RETURN'}
            </span>

            {symbol !== 'eth' && (
              <div className={'tx-value-container'}>
                <span className={'tx-value'}>
                  {tx?.value}
                </span>

                { !!tx?.address && (
                  <i className={`tooltip fas fa-globe ${tx?.spent && 'spent'}`}>
                    <span className={'tooltiptext'}>{tx?.spent ? 'Spent' : 'Unspent'}</span>
                  </i>
                )}
              </div>
            )}

          </div>
        ))}

        <div className={'tx-total'}>
          <span>{transaction?.value}</span>
        </div>

        {confirmations <= 5 && (
          <div className={'tx-confirmations'}>
            <span>{confirmations} Confirmations</span>
          </div>
        )}

      </div>
    </StyledTransaction>
  );
};

Transaction.defaultProps = {};

export default Transaction;
