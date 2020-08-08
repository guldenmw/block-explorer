import {
  SELECT_SYMBOL,
  FETCH_LATEST_BLOCKS_ERROR,
  FETCH_LATEST_BLOCKS_START,
  FETCH_LATEST_BLOCKS_SUCCESS,
  FETCH_SINGLE_BLOCK_START,
  FETCH_SINGLE_BLOCK_SUCCESS,
  FETCH_SINGLE_BLOCK_ERROR,
} from './actions';

import { IBlock, IEthBlock, IFullEthTransaction, ITableBlock, ITransaction, TSymbol } from './interfaces';


export interface IApplicationState {
  currentSymbol: TSymbol;
  blocks: ITableBlock[];
  isLoading: boolean;
  hasError: boolean;
  currentBlock: IBlock | IEthBlock | {};
  transactions: ITransaction[] | IFullEthTransaction[];
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

    case FETCH_SINGLE_BLOCK_START: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    case FETCH_SINGLE_BLOCK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        currentBlock: data?.block,
        transactions: data?.transactions,
      }
    }

    case FETCH_SINGLE_BLOCK_ERROR: {
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
