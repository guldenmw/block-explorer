import { call, put } from 'redux-saga/effects';
import { fetchSingleBlockError, fetchSingleBlockSuccess } from '../../actions';
import {
  IBlock,
  IEthTransaction,
  IFullEthTransaction,
  INewBlock
} from '../../interfaces';
import moment from 'moment';
import getLatestBlockNumber from '../../api/get-latest-block-number';
import getBlockByHash from '../../api/get-block-by-hash';
import { satoshi } from '../../constants';


const parseBlock = (block: INewBlock, latestBlockNumber: number): IBlock => {
  return {
    hash: block?.hash,
    confirmations: block?.id - latestBlockNumber + 1,
    timestamp: block?.time,
    height: block?.id,
    miner: block?.guessed_miner,
    transactionCount: block?.transaction_count,
    difficulty: block?.difficulty,
    merkle: block?.merkle_root,
    version: block?.version_hex,
    bits: block?.bits,
    weight: `${block?.weight} WU`,
    size: `${block?.size} bytes`,
    nonce: block?.nonce,
    volume: `${block?.input_total/satoshi} BTC`,
    reward: `${block?.generation/satoshi} BTC`,
    fee: `${block?.fee_total/satoshi} BTC`,
  }
}

const parseTransaction = (tx: IFullEthTransaction): IEthTransaction => {
  return {
    hash: tx?.blockHash,
    to: tx?.to,
    from: tx?.from,
    time: moment.unix(Number(tx?.timestamp)).toISOString(),
    fee: Number(tx?.gasLimit) * Number(tx?.gasPrice),
  }
}

function* getSingleBtcBchBlockWorker(action, symbol) {
  try {
    const blockHash = action?.data;

    const latestBlockNumber = yield call(getLatestBlockNumber, symbol);

    const result = yield call(getBlockByHash, symbol, blockHash)

    const block = parseBlock(result?.data?.[blockHash]?.block, latestBlockNumber);
    const rawTxs: IFullEthTransaction[] = result?.transactions;
    const transactions: IEthTransaction[] = rawTxs?.map(tx => parseTransaction(tx));

    return yield put(fetchSingleBlockSuccess({ block, transactions }));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchSingleBlockError());
  }
}

export default getSingleBtcBchBlockWorker;
