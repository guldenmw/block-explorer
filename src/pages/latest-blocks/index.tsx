import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledLatestBlocks } from './styles';
import Sidebar from './components/sidebar';
import BlocksTable from './components/blocks-table';
import { TSymbol } from '../../modules/interfaces';
import ErrorPage from '../error-page';
import { IApplicationState } from '../../modules/reducer';
import { fetchLatestBlocksStart, selectSymbol } from '../../modules/actions';


/**
 * Page responsible for displaying the latest blocks of the
 * selected cryptocurrency option
 */
const LatestBlocks: FC = () => {
  const dispatch = useDispatch();
  const {
    currentSymbol,
    isLoading,
    hasError,
    blocks,
  } = useSelector((state: IApplicationState) => state)

  useEffect(() => {
    dispatch(fetchLatestBlocksStart(currentSymbol));
  }, [currentSymbol, dispatch]);

  const handleSelectSymbol = (currentSymbol: TSymbol) => {
    dispatch(selectSymbol(currentSymbol));
  }

  return (
    <>
      {!hasError && (
        <StyledLatestBlocks>
          <Sidebar symbol={currentSymbol} selectSymbol={handleSelectSymbol}/>
          <BlocksTable symbol={currentSymbol} blocks={blocks} isLoading={isLoading}/>
        </StyledLatestBlocks>
      )}

      {hasError && (
        <ErrorPage
          errorCode={''}
          errorMessage={'Could not load the latest blocks. Please try again later.'}
        />
      )}
    </>
  );
};

LatestBlocks.defaultProps = {};

export default LatestBlocks;
