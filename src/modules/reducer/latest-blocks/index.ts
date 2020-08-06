import {
  FETCH_LATEST_BLOCKS_ERROR,
  FETCH_LATEST_BLOCKS_START,
  FETCH_LATEST_BLOCKS_SUCCESS
} from '../../actions';

import { IBlock } from '../../interfaces';

export interface ILatestBlocksReducerState {
  blocks: IBlock[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: ILatestBlocksReducerState = {
  blocks: [],
  isLoading: false,
  hasError: false,
};

const latestBlocksReducer = (state = initialState, action): ILatestBlocksReducerState => {
  const { type, data } = action;
  switch (type) {
    case FETCH_LATEST_BLOCKS_START: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    case FETCH_LATEST_BLOCKS_SUCCESS: {
      return {
        ...state,
        blocks: data,
        isLoading: false,
        hasError: false,
      }
    }

    case FETCH_LATEST_BLOCKS_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    }

    default:
      return state;
  }
};

export default latestBlocksReducer;
