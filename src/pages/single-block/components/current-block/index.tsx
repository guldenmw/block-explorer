import React, { FC, useMemo } from 'react';

import { IBlock, IEthBlock, ITransaction, TSymbol } from '../../../../modules/interfaces';
import { BitcoinIcon, BitcoinCashIcon, EthereumIcon } from '../../../../components/icons';

import BlockInfo from '../block-info';
import Transaction from '../transaction';


const icon = {
  'btc': <BitcoinIcon/>,
  'eth': <EthereumIcon/>,
  'bch': <BitcoinCashIcon/>
}

interface IProps {
  symbol: TSymbol;
  block: IBlock | IEthBlock | any;
  transactions: ITransaction[];
}

/**
 * Component responsible for displaying the current selected
 * or searched for block
 */
const CurrentBlock: FC<IProps> = (props) => {
  const {
    symbol,
    block,
    transactions,
  } = props;

  const currencyName = useMemo(() => {
    let symbol = 'Bitcoin';
    if (symbol === 'eth') {
      symbol = 'Ethereum';
    } else if (symbol === 'bch') {
      symbol = 'Bitcoin Cash';
    }
    return symbol;
  }, []);

  return (
    <>
      <header className={'page-header'}>
        <div className={'header-title'}>
          {icon[symbol]}
          <h2 className={'page-title'}>
            <span className={'symbol-title'}>{symbol.toUpperCase()}</span> / Block
          </h2>
        </div>
        <span>Block at depth {block?.height} in the {currencyName} blockchain</span>
      </header>
      <BlockInfo block={block}/>
      <section className={'transactions'}>
        <h3>Transactions</h3>

        {transactions?.map((tx, index) => (
          <Transaction
            symbol={symbol}
            transaction={tx}
            confirmations={block?.confirmations}
            key={index}
          />
        ))}
      </section>
    </>
  );
};

CurrentBlock.defaultProps = {};

export default CurrentBlock;
