import { TSymbol } from '../../interfaces';
import { fork, select } from 'redux-saga/effects';
import { IApplicationState } from '../../reducer';
import getSingleEthBlockWorker from '../workers/get-single-eth-block-worker';
import getSingleBtcBchBlockWorker from '../workers/get-single-btc-bch-block-worker';


/**
 * Decide which worker to call based on current symbol
 */
function* getSingleBlockSaga(action) {
  const symbol: TSymbol = yield select((state: IApplicationState) => state?.currentSymbol);

  if (symbol === 'eth') {
    yield fork(getSingleEthBlockWorker, action);
  } else {
    yield fork(getSingleBtcBchBlockWorker, action, symbol);
  }
}

export default getSingleBlockSaga;