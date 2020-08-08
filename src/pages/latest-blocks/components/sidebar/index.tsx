import React, { Component, FC } from 'react';
import { StyledSidebar } from './styles';
import BitcoinIcon from '../../../../components/icons/bitcoin-icon';
import EthereumIcon from '../../../../components/icons/ethereum-icon';
import BitcoinCashIcon from '../../../../components/icons/bitcoin-cash-icon';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';
import { TSymbols } from '../../../../modules/interfaces';

interface ICurrencyOption {
  name: string;
  icon: any,
  price: string;
  symbol: TSymbols;
}

const currencyOptions: ICurrencyOption[] = [
  {name: 'Bitcoin', icon: <BitcoinIcon/>, price: '$9,273.76', symbol: 'btc'},
  {name: 'Ethereum', icon: <EthereumIcon/>, price: '$188.03', symbol: 'eth'},
  {name: 'Bitcoin Cash', icon: <BitcoinCashIcon/>, price: '$382.77', symbol: 'bch'}
]
interface IProps {
  symbol: TSymbols;
  selectSymbol: (symbol: TSymbols) => void;
}

const Sidebar: FC<IProps> = (props) => {
  const { symbol, selectSymbol } = props;

  return (
    <StyledSidebar>
      <h3 className={'page-title'}>Block Explorer</h3>
      <div className={'currency-options'}>
      {currencyOptions.map(({ name, icon, price, symbol }, index) => (
        <div className={'currency-option'}>
          <div onClick={e => selectSymbol(symbol)} className={'option-icon'}>
            {icon}
          </div>
          <div className={'option-details'} onClick={e => selectSymbol(symbol)}>
            <strong className={'currency-name'}>{name}</strong>
            <span className={'currency-price'}>{price}</span>
          </div>
        </div>
      ))}
      </div>
    </StyledSidebar>
  );
};

Sidebar.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
