import { call, put } from 'redux-saga/effects';
import { fetchLatestBlocksError, fetchLatestBlocksSuccess } from '../actions';
import { IBlock, ILatestBlock } from '../interfaces';
import getLatestBlock from '../api/get-latest-block';
import getBlocksByHeights from '../api/get-blocks-by-height';

/**
 * Return an array of strings counting down by one from the startHeight
 * by the range amount provided. Includes startHeight at 0 index.
 * @param startHeight - eg 642463
 * @param range - 20
 */
const getBlockHeightsRange = (startHeight: number, range: number): number[] => {
  let heights = [startHeight];
  for(let i = 0; i < range; i++) {
    heights.push(startHeight - i);
  }
  return heights;
}

function* getLastestBlocksSaga(action) {
  try {
    const { data: { symbol } } = action;

    const latestBlock: ILatestBlock = yield call(getLatestBlock);
    const heights = getBlockHeightsRange(latestBlock?.height, 20);

    const latestBlocks: IBlock[] = yield call(getBlocksByHeights, symbol, heights?.join(','));

    return yield put(fetchLatestBlocksSuccess(latestBlocks));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchLatestBlocksError());
  }
}

export default getLastestBlocksSaga;
