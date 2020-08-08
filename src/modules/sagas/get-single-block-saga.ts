import { call, put, select } from 'redux-saga/effects';
import { fetchTransactionsError, fetchTransactionsSuccess, selectBlock } from '../actions';
import { IApplicationState } from '../reducer';
import { IBlock, ITransaction, TSymbols } from '../interfaces';
import getTransactions from '../api/get-transactions';
import getBlockByHash from '../api/get-block-by-hash';

function* getSingleBlockSaga(action) {
  try {
    const blockHash = action?.data;
    const symbol: TSymbols = yield select((state: IApplicationState) => state.currentSymbol);

    const currentBlock = yield call(getBlockByHash, symbol, blockHash)

    yield put(selectBlock(currentBlock))

    const txsStr = currentBlock?.tx?.slice(0, 5).join(',');

    const transactions: ITransaction[] = yield call(getTransactions, symbol, txsStr);

    return yield put(fetchTransactionsSuccess(transactions));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchTransactionsError());
  }
}

export default getSingleBlockSaga;
