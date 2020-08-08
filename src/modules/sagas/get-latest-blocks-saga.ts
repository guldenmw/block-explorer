import { call, fork, put, select } from 'redux-saga/effects';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../actions';
import { IBlock, ITransaction, TSymbols } from '../interfaces';
import getLatestBlockNumber from '../api/get-latest-block-number';
import getBlocksByHeights from '../api/get-blocks-by-height';
import getTransactions from '../api/get-transactions';
import { pools } from '../constants';
import { IApplicationState } from '../reducer';
import getLastestEthBlocksSaga from './get-latest-eth-blocks-saga';
import moment from 'moment';


/**
 * Helper function that returns an array of strings counting down by one from the
 * startHeight by the range amount provided. Includes startHeight at 0 index.
 *
 * @param startHeight - eg 642463
 * @param range - 20
 */
export const getBlockHeightsRange = (startHeight: number, range: number): number[] => {
  let heights = [startHeight];
  for(let i = 0; i < range; i++) {
    heights.push(startHeight - i);
  }
  return heights;
}

/**
 * Saga responsible for fetching and shaping data of the latest blocks
 */
function* getLastestBtcBchBlocksSaga() {
  try {
    const symbol = yield select((state: IApplicationState) => state?.currentSymbol);

    // Fetch latest blocks
    const latestBlockNumber: number = yield call(getLatestBlockNumber, symbol);
    const heights = getBlockHeightsRange(latestBlockNumber, 20);
    const latestBlocks: IBlock[] = yield call(getBlocksByHeights, symbol, heights?.join(','));

    // Fetch the first transaction of each block by building
    // a comma separated string of the combined transaction ids
    const txIds = latestBlocks?.map(block => block?.tx?.[0]);
    const transactions: ITransaction[] = yield call(getTransactions, symbol, txIds?.join(','));

    // Add all the transactions and the block miner to each block
    let updatedBlocks = [];
    for (const block of latestBlocks) {
      // Find all the transactions belonging to the current block
      const txs = transactions?.filter((tx) => tx?.block?.height === block?.height);

      // Try derive the miner from the block's coinbase tx
      // We'll assume for now that the first tx in the array is the coinbase tx
      const minerAddress: string = txs?.[0].outputs[0].address;
      const minerName = pools.payout_addresses[minerAddress]?.name;

      updatedBlocks.push({
        height: block.height,
        hash: block.hash,
        time: moment.unix(block.time).fromNow(true),
        size: `${block.size} bytes`,
        miner: minerName ? minerName : 'Unknown',
      })
    }

    return yield put(fetchLatestBlocksSuccess(updatedBlocks));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}

function* getLastestBlocksSaga(action) {
  const symbol: TSymbols = yield select((state: IApplicationState) => state?.currentSymbol);
  if (symbol === 'eth') {
    yield fork(getLastestEthBlocksSaga);
  } else {
    yield fork(getLastestBtcBchBlocksSaga);
  }
}

export default getLastestBlocksSaga;
