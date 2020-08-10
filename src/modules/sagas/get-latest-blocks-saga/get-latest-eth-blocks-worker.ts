import { call, put } from 'redux-saga/effects';
import moment from 'moment';

import { IFullEthBlock } from '../../interfaces';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../../actions';
import { getLatestEthBlocks } from '../../api';


interface IResponse {
  blockHeaders: IFullEthBlock[];
  from: string;
  size: number;
}
/**
 * Saga responsible for fetching and shaping data of the latest ETH blocks
 */
function* getLastestEthBlocksWorker() {
  try {
    const latestBlocks: IResponse = yield call(getLatestEthBlocks, 20);

    const updatedBlocks = latestBlocks?.blockHeaders?.map((block) => ({
      number: block.number,
      hash: block.hash,
      time: moment.unix(Number(block.timestamp)).fromNow(true),
      miner: block.miner,
      transactions: (block.transactionCount)?.toLocaleString('en'),
      size: parseFloat(block.size)?.toLocaleString('en') + ' bytes',
    }))

    return yield put(fetchLatestBlocksSuccess(updatedBlocks));

  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}

export default getLastestEthBlocksWorker;
