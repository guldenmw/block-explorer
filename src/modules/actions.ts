import { TSymbol } from './interfaces';

export const SELECT_SYMBOL = 'select-symbol';

export const FETCH_LATEST_BLOCKS_START = 'fetch-latest-blocks-start';
export const FETCH_LATEST_BLOCKS_SUCCESS = 'fetch-latest-blocks-success';
export const FETCH_LATEST_BLOCKS_ERROR = 'fetch-latest-blocks-error';

export const FETCH_SINGLE_BLOCK_START = 'fetch-single-block-start';
export const FETCH_SINGLE_BLOCK_SUCCESS = 'fetch-single-block-success';
export const FETCH_SINGLE_BLOCK_ERROR = 'fetch-single-block-error';


export const selectSymbol = data => ({
  type: SELECT_SYMBOL, data,
});

export const fetchLatestBlocksStart = (data: TSymbol) => ({
  type: FETCH_LATEST_BLOCKS_START, data,
});

export const fetchLatestBlocksSuccess = data => ({
  type: FETCH_LATEST_BLOCKS_SUCCESS, data,
});

export const fetchLatestBlocksError = () => ({
  type: FETCH_LATEST_BLOCKS_ERROR,
});


export const fetchSingleBlockStart = data => ({
  type: FETCH_SINGLE_BLOCK_START, data,
});

export const fetchSingleBlockSuccess = data => ({
  type: FETCH_SINGLE_BLOCK_SUCCESS, data,
});

export const fetchSingleBlockError = () => ({
  type: FETCH_SINGLE_BLOCK_ERROR,
});
