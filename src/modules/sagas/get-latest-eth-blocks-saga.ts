import { call, put } from 'redux-saga/effects';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../actions';
import { IEthBlock } from '../interfaces';
import getLatestEthBlocks from '../api/get-latest-eth-blocks';
import moment from 'moment';


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
    const updatedBlocks = latestBlocks?.blockHeaders?.map((block) => ({
      number: block.number,
      hash: block.hash,
      time: moment.unix(Number(block.timestamp)).fromNow(true),
      miner: block.miner,
      transactions: block.transactionCount,
      size: block.size + ' bytes',
    }))

    return yield put(fetchLatestBlocksSuccess(updatedBlocks));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}

export default getLastestEthBlocksSaga;
