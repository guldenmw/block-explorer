import { call, put } from 'redux-saga/effects';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../actions';
import { IBlock, ILatestBlock, ITransaction } from '../interfaces';
import getLatestBlockNumber from '../api/get-latest-block-number';
import getBlocksByHeights from '../api/get-blocks-by-height';
import getTransactions from '../api/get-transactions';
import { pools } from '../constants';
import getEthBlocksByHeights from '../api/get-eth-blocks-by-range';


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
function* getLastestBlocksSaga(action) {
  try {
    const symbol = action?.data;

    // Fetch latest blocks
    const latestBlockNumber: number = yield call(getLatestBlockNumber, symbol);
    let latestBlocks: IBlock[] = yield call(getEthBlocksByHeights, latestBlockNumber, 20);

    // Fetch the first 5 transactions of each block by building
    // a comma separated string of the combined transaction ids
    const txIds = latestBlocks?.reduce((txIdStr, block) => {
      const currentTxIds = block?.tx?.slice(0, 4)?.join(',');
      return txIdStr + currentTxIds;
    }, '');
    const transactions: ITransaction[] = yield call(getTransactions, symbol, txIds);

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
        ...block,
        transactions: txs,
        miner: minerName ? minerName : 'Unknown',
      })
    }

    return yield put(fetchLatestBlocksSuccess(updatedBlocks));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}

export default getLastestBlocksSaga;
