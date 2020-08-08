import { takeLatest } from 'redux-saga/effects';
import { FETCH_LATEST_BLOCKS_START, FETCH_SINGLE_BLOCK_START } from '../actions';
import getLastestBlocksSaga from './get-latest-blocks-saga';
import getSingleBlockSaga from './get-single-block-saga';

export default function* rootSaga() {
  yield takeLatest(FETCH_LATEST_BLOCKS_START, getLastestBlocksSaga);
  yield takeLatest(FETCH_SINGLE_BLOCK_START, getSingleBlockSaga);
}