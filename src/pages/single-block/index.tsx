import React, { FC, useEffect } from 'react';
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
    currentBlock
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

  return (
    <StyledSingleBlock>
      {isLoading && (
        <Loader/>
      )}
      {!isLoading && !hasError && (
        <>
          <header className={'page-header'}>
            {icon[currentSymbol]}
            <h2 className={'page-title'}>
              <span className={'symbol-title'}>{currentSymbol.toUpperCase()}</span> / Block
            </h2>
          </header>
        </>
      )}
      <BlockInfo currentBlock={currentBlock}/>
      {/*<Transactions transactions={currentBlock?.transactions}/>*/}
    </StyledSingleBlock>
  );
};

SingleBlock.defaultProps = {};

export default SingleBlock;
