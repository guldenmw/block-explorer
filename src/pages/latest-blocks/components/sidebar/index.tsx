import React, { FC } from 'react';
import { StyledSidebar } from './styles';
import BitcoinIcon from '../../../../components/icons/bitcoin-icon';
import EthereumIcon from '../../../../components/icons/ethereum-icon';
import BitcoinCashIcon from '../../../../components/icons/bitcoin-cash-icon';

interface IProps {
  [x: string]: any;
}

const Sidebar: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledSidebar>
      <h3 className={'page-title'}>Block Explorer</h3>
      <div className={'currency-option'}>
        <BitcoinIcon/>
        <div className={'options-details'}>
          <strong className={'currency-name'}>Bitcoin</strong>
          <span className={'currency-price'}>$9,273.76</span>
        </div>
      </div>
      <div className={'currency-option'}>
        <EthereumIcon/>
        <div className={'options-details'}>
          <span className={'currency-name'}>Ethereum</span>
          <span className={'currency-price'}>$188.03</span>
        </div>
      </div>
      <div className={'currency-option'}>
        <BitcoinCashIcon/>
        <div className={'options-details'}>
          <span className={'currency-name'}>Bitcoin Cash</span>
          <span className={'currency-price'}>$382.77</span>
        </div>
      </div>
    </StyledSidebar>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
