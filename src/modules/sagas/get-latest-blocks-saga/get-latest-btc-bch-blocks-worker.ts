import { call, put, select } from 'redux-saga/effects';

import { IApplicationState } from '../../reducer';
import { INewBlock } from '../../interfaces';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../../actions';
import { getLatestBtcBchBlocks } from '../../api';


/**
 * Saga responsible for fetching and shaping data of the latest blocks
 */
function* getLastestBtcBchBlocksWorker() {
  try {
    const symbol = yield select((state: IApplicationState) => state?.currentSymbol);

    // Fetch latest blocks
    const result = yield call(getLatestBtcBchBlocks, symbol);
    const latestBlocks: INewBlock[] = result?.data;

    // Parse the blocks into display format
    let updatedBlocks = [];
    for (const block of latestBlocks) {
      updatedBlocks.push({
        height: block?.id,
        hash: block?.hash,
        time: block?.time,
        size: `${(block?.size)?.toLocaleString('en')} bytes`,
        miner: block?.guessed_miner,
      })
    }

    return yield put(fetchLatestBlocksSuccess(updatedBlocks));

  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}


export default getLastestBtcBchBlocksWorker;
