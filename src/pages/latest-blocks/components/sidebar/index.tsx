import React, { FC } from 'react';
import { StyledSidebar } from './styles';
import BitcoinIcon from '../../../../components/icons/bitcoin-icon';
import EthereumIcon from '../../../../components/icons/ethereum-icon';
import BitcoinCashIcon from '../../../../components/icons/bitcoin-cash-icon';
import { TSymbol } from '../../../../modules/interfaces';
import CurrencyOption from '../currency-option';


export interface ICurrencyOption {
  name: string;
  icon: any,
  symbol: TSymbol;
}

const currencyOptions: ICurrencyOption[] = [
  {name: 'Bitcoin', icon: <BitcoinIcon/>, symbol: 'btc'},
  {name: 'Ethereum', icon: <EthereumIcon/>, symbol: 'eth'},
  {name: 'Bitcoin Cash', icon: <BitcoinCashIcon/>, symbol: 'bch'}
]
interface IProps {
  symbol: TSymbol;
  selectSymbol: (symbol: TSymbol) => void;
}

const Sidebar: FC<IProps> = (props) => {
  const { symbol, selectSymbol } = props;

  const handleOnClick = (value: TSymbol) => {
    selectSymbol(value);
  }

  return (
    <StyledSidebar>
      <div className={'currency-options'}>
      {currencyOptions.map((option, index) => (
        <CurrencyOption
          option={option}
          className={symbol === option?.symbol && 'selected'}
          onClick={handleOnClick}
          key={index}
        />
      ))}
      </div>
    </StyledSidebar>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
