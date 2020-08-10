import { call, put, select } from 'redux-saga/effects';
import moment from 'moment';

import { IApplicationState } from '../../reducer';
import { pools } from '../../constants';
import { IFullBlock, IFullTransaction } from '../../interfaces';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../../actions';
import { getBlocksByHeights, getLatestBlockNumber, getTransactions } from '../../api';


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
function* getLastestBtcBchBlocksWorker() {
  try {
    const symbol = yield select((state: IApplicationState) => state?.currentSymbol);

    // Fetch latest blocks
    const latestBlockNumber: number = yield call(getLatestBlockNumber, symbol);
    const heights = getBlockHeightsRange(latestBlockNumber, 20);
    const latestBlocks: IFullBlock[] = yield call(getBlocksByHeights, symbol, heights?.join(','));

    // Fetch the first transaction of each block by building
    // a comma separated string of the combined transaction ids
    const txIds = latestBlocks?.map(block => block?.tx?.[0]);
    const transactions: IFullTransaction[] = yield call(getTransactions, symbol, txIds?.join(','));

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
        size: `${(block.size)?.toLocaleString('en')} bytes`,
        miner: minerName ? minerName : 'Unknown',
      })
    }

    return yield put(fetchLatestBlocksSuccess(updatedBlocks));

  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}


export default getLastestBtcBchBlocksWorker;
