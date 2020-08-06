export const FETCH_LATEST_BLOCKS_START = 'fetch-latest-blocks_START';
export const FETCH_LATEST_BLOCKS_SUCCESS = 'fetch-latest-blocks_SUCCESS';
export const FETCH_LATEST_BLOCKS_ERROR = 'fetch-latest-blocks_ERROR';


export const fetchLatestBlocksStart = data => ({
  type: FETCH_LATEST_BLOCKS_START, data,
});

export const fetchLatestBlocksSuccess = data => ({
  type: FETCH_LATEST_BLOCKS_SUCCESS, data,
});

export const fetchLatestBlocksError = () => ({
  type: FETCH_LATEST_BLOCKS_ERROR,
});
