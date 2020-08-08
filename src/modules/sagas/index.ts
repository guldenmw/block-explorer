import { takeLatest } from 'redux-saga/effects';
import { FETCH_LATEST_BLOCKS_START } from '../actions';
import getLastestBlocksSaga from './get-latest-blocks-saga';

export default function* rootSaga() {
  yield takeLatest(FETCH_LATEST_BLOCKS_START, getLastestBlocksSaga);
}