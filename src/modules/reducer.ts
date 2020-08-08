import {
  SELECT_SYMBOL,
  FETCH_LATEST_BLOCKS_ERROR,
  FETCH_LATEST_BLOCKS_START,
  FETCH_LATEST_BLOCKS_SUCCESS,
} from './actions';

import { IBlock, TSymbols } from './interfaces';


export interface IApplicationState {
  currentSymbol: TSymbols;
  blocks: IBlock[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IApplicationState = {
  currentSymbol: 'btc',
  blocks: [],
  isLoading: false,
  hasError: false,
};


const latestBlocksReducer = (state = initialState, action): IApplicationState => {
  const { type, data } = action;
  switch (type) {
    case SELECT_SYMBOL: {
      return {
        ...state,
        currentSymbol: data,
      }
    }

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
