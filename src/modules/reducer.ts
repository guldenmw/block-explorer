import {
  SELECT_SYMBOL,
  FETCH_LATEST_BLOCKS_ERROR,
  FETCH_LATEST_BLOCKS_START,
  FETCH_LATEST_BLOCKS_SUCCESS,
  FETCH_TRANSACTIONS_SUCCESS,
  SELECT_BLOCK, FETCH_TRANSACTIONS_ERROR, FETCH_TRANSACTIONS_START
} from './actions';

import { IBlock, ITransaction, TSymbols } from './interfaces';


export interface IApplicationState {
  currentSymbol: TSymbols;
  blocks: IBlock[];
  currentBlock: IBlock | {};
  transactions: ITransaction[];
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IApplicationState = {
  currentSymbol: 'btc',
  blocks: [],
  isLoading: false,
  hasError: false,
  currentBlock: {},
  transactions: [],
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

    case FETCH_TRANSACTIONS_START: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    case FETCH_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        transactions: data,
        isLoading: false,
        hasError: false,
      }
    }

    case FETCH_TRANSACTIONS_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    }

    case SELECT_BLOCK: {
      return {
        ...state,
        currentBlock: data,
      }
    }

    default:
      return state;
  }
};

export default latestBlocksReducer;
