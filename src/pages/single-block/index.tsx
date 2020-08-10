import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IApplicationState } from '../../modules/reducer';
import { fetchSingleBlockStart, selectSymbol } from '../../modules/actions';
import checkSymbol from '../../modules/api/check-symbol';

import Loader from '../../components/loader';
import ErrorPage from '../error-page';
import CurrentBlock from './components/current-block';
import { StyledSingleBlock } from './styles';


interface IProps {
  blockHash: string;
}

/**
 * Page responsible for showing the specific block that was
 * selected or searched for
 */
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
  }, [blockHash, dispatch]);

  // When we have figured out what currency the block belongs to
  // or the block hash changes, fetch the block at the given hash again.
  useEffect(() => {
    if (currentSymbol) {
      dispatch(fetchSingleBlockStart(blockHash));
    }
  }, [blockHash, currentSymbol, dispatch]);

  return (
    <>
      {isLoading && (
        <Loader/>
      )}

      {!isLoading && !hasError && (
        <StyledSingleBlock>
          {!!Object.entries(currentBlock).length && (
            <CurrentBlock
              symbol={currentSymbol}
              block={currentBlock}
              transactions={transactions}
            />
          )}
        </StyledSingleBlock>
      )}

      {hasError && (
        <ErrorPage
          errorCode={'404'}
          errorMessage={"Sorry! We couldn't find the block you are looking for."}
        />
      )}
    </>
  );
};

SingleBlock.defaultProps = {};

export default SingleBlock;
