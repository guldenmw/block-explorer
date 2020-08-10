import React, { FC, useEffect } from 'react';
import { StyledSingleBlock } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import checkSymbol from '../../modules/api/check-symbol';
import Loader from '../../components/loader';
import { fetchSingleBlockStart, selectSymbol } from '../../modules/actions';
import { IApplicationState } from '../../modules/reducer';
import CurrentBlock from './components/current-block';
import ErrorPage from '../error-page';


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
