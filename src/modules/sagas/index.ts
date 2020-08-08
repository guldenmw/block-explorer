import { takeLatest } from 'redux-saga/effects';
import { FETCH_LATEST_BLOCKS_START, FETCH_TRANSACTIONS_START } from '../actions';
import getLastestBlocksSaga from './get-latest-blocks-saga';
import getSingleBlockSaga from './get-single-block-saga';

export default function* rootSaga() {
  yield takeLatest(FETCH_LATEST_BLOCKS_START, getLastestBlocksSaga);
  yield takeLatest([FETCH_TRANSACTIONS_START], getSingleBlockSaga);
}