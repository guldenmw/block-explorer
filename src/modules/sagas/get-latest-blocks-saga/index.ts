import { TSymbol } from '../../interfaces';
import { fork, select } from 'redux-saga/effects';
import { IApplicationState } from '../../reducer';
import getLastestEthBlocksWorker from '../workers/get-latest-eth-blocks-worker';
import getLastestBtcBchBlocksWorker from '../workers/get-latest-btc-bch-blocks-worker';


/**
 * Decide which worker to call based on current symbol
 */
function* getLastestBlocksSaga(action) {
  const symbol: TSymbol = yield select((state: IApplicationState) => state?.currentSymbol);
  if (symbol === 'eth') {
    yield fork(getLastestEthBlocksWorker);
  } else {
    yield fork(getLastestBtcBchBlocksWorker);
  }
}

export default getLastestBlocksSaga;
