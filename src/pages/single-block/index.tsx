import React, { FC, useEffect, useMemo } from 'react';
import { StyledSingleBlock } from './styles';
import BlockInfo from './components/block-info';
import { useDispatch, useSelector } from 'react-redux';
import checkSymbol from '../../modules/api/check-symbol';
import EthereumIcon from '../../components/icons/ethereum-icon';
import BitcoinIcon from '../../components/icons/bitcoin-icon';
import BitcoinCashIcon from '../../components/icons/bitcoin-cash-icon';
import Loader from '../../components/loader';
import { fetchSingleBlockStart, selectSymbol } from '../../modules/actions';
import { IApplicationState } from '../../modules/reducer';
import Transaction from './components/transaction';


const icon = {
  'btc': <BitcoinIcon/>,
  'eth': <EthereumIcon/>,
  'bch': <BitcoinCashIcon/>
}

interface IProps {
  blockHash: string;
}

const SingleBlock: FC<IProps> = (props) => {
  const {
    blockHash,
  } = props;

  const dispatch = useDispatch();
  const {
    isLoading,
    hasError,
    currentSymbol,
    currentBlock,
    transactions,
  } = useSelector((state: IApplicationState) => state)

  // Figure out what currency we have to search for.
  useEffect(() => {
    checkSymbol(blockHash).then((result) => dispatch(selectSymbol(result)));
  }, []);

  useEffect(() => {
    if (currentSymbol) {
      dispatch(fetchSingleBlockStart(blockHash));
    }
  }, [blockHash, currentSymbol]);

  const currencyName = useMemo(() => {
    let symbol = 'Bitcoin';
    if (currentSymbol === 'eth') {
      symbol = 'Ethereum';
    } else if (currentSymbol === 'bch') {
      symbol = 'Bitcoin Cash';
    }
    return symbol;
  }, [currentSymbol]);

  return (
    <StyledSingleBlock>
      {isLoading && (
        <Loader/>
      )}
      {!isLoading && !hasError && (
        <>
          <header className={'page-header'}>
            <div className={'header-title'}>
              {icon[currentSymbol]}
              <h2 className={'page-title'}>
                <span className={'symbol-title'}>{currentSymbol.toUpperCase()}</span> / Block
              </h2>
            </div>
            <span>Block at depth {currentBlock?.height} in the {currencyName} blockchain</span>
          </header>
          <BlockInfo currentBlock={currentBlock}/>
          <section className={'transactions'}>
            <h3>Transactions</h3>

            {transactions?.map((tx, index) => (
              <Transaction
                symbol={currentSymbol}
                transaction={tx}
                confirmations={currentBlock?.confirmations}
                key={index}
              />
            ))}
          </section>
        </>
      )}
    </StyledSingleBlock>
  );
};

SingleBlock.defaultProps = {};

export default SingleBlock;
