import React, { FC, useEffect, useState } from 'react';
import { ICurrencyOption } from '../sidebar';
import { TSymbol } from '../../../../modules/interfaces';
import { StyledOption } from './styles';


interface IProps {
  className: string;
  option: ICurrencyOption;
  onClick: (value: TSymbol) => void;
}

/**
 * Component that displays a Cryptocurrency icon with it's name and current price
 */
const CurrencyOption: FC<IProps> = (props) => {
  const {
    className,
    option,
    onClick,
  } = props;
  const [currentPrice, setCurrentPrice] = useState<number>(null);

  useEffect(() => {
    const run = async () => {
      const response: any = await fetch(`https://blockchain.info/ticker?base=${option?.symbol}`)
      const result = await response?.json();
      setCurrentPrice(result?.USD?.last)
    }
    run();
  }, [option]);

  return (
    <StyledOption className={className} onClick={() => onClick(option?.symbol)}>
      {option?.icon}
      <div className={'option-details'}>
        <strong className={'currency-name'}>{option?.name}</strong>
        <span className={'currency-price'}>${currentPrice}</span>
      </div>
    </StyledOption>
  );
};

CurrencyOption.defaultProps = {};

export default CurrencyOption;
