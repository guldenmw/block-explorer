import { IBlock, TSymbols } from './interfaces';

export const SELECT_SYMBOL = 'select-symbol';

export const FETCH_LATEST_BLOCKS_START = 'fetch-latest-blocks-start';
export const FETCH_LATEST_BLOCKS_SUCCESS = 'fetch-latest-blocks-success';
export const FETCH_LATEST_BLOCKS_ERROR = 'fetch-latest-blocks-error';

export const FETCH_TRANSACTIONS_START = 'fetch-transactions-start';
export const FETCH_TRANSACTIONS_SUCCESS = 'fetch-transactions-success';
export const FETCH_TRANSACTIONS_ERROR = 'fetch-transactions-error';

export const SELECT_BLOCK = 'select-block';


export const selectSymbol = data => ({
  type: SELECT_SYMBOL, data,
});

export const fetchLatestBlocksStart = (data: TSymbols) => ({
  type: FETCH_LATEST_BLOCKS_START, data,
});

export const fetchLatestBlocksSuccess = data => ({
  type: FETCH_LATEST_BLOCKS_SUCCESS, data,
});

export const fetchLatestBlocksError = () => ({
  type: FETCH_LATEST_BLOCKS_ERROR,
});


export const fetchTransactionsStart = (data: string) => ({
  type: FETCH_TRANSACTIONS_START, data,
});

export const fetchTransactionsSuccess = data => ({
  type: FETCH_TRANSACTIONS_SUCCESS, data,
});

export const fetchTransactionsError = () => ({
  type: FETCH_TRANSACTIONS_ERROR,
});


export const selectBlock = (data: IBlock) => ({
  type: SELECT_BLOCK, data,
});
