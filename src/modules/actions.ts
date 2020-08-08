import { TSymbols } from './interfaces';

export const SELECT_SYMBOL = 'select-symbol';

export const FETCH_LATEST_BLOCKS_START = 'fetch-latest-blocks-start';
export const FETCH_LATEST_BLOCKS_SUCCESS = 'fetch-latest-blocks-success';
export const FETCH_LATEST_BLOCKS_ERROR = 'fetch-latest-blocks-error';


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
