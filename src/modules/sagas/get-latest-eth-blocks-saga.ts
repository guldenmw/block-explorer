import { call, put } from 'redux-saga/effects';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../actions';
import { IEthBlock } from '../interfaces';
import getLatestEthBlocks from '../api/get-latest-eth-blocks';


const unusedKeys = [
  'parentHash',
  'transactionsRoot',
  'stateRoot',
  'logsBloom',
  'extraData',
]

interface IResponse {
  blockHeaders: IEthBlock[];
  from: string;
  size: number;
}
/**
 * Saga responsible for fetching and shaping data of the latest ETH blocks
 */
function* getLastestEthBlocksSaga() {
  try {

    const latestBlocks: IResponse = yield call(getLatestEthBlocks, 20);

    return yield put(fetchLatestBlocksSuccess(latestBlocks?.blockHeaders));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}

export default getLastestEthBlocksSaga;
