import { call, put } from 'redux-saga/effects';
import getEthBlockByHash from '../../api/get-eth-block-by-hash';
import { fetchSingleBlockError, fetchSingleBlockSuccess } from '../../actions';
import { IEthBlock, IEthTransaction, IFullEthBlock, IFullEthTransaction } from '../../interfaces';
import moment from 'moment';
import getLatestBlockNumber from '../../api/get-latest-block-number';
import { wei } from '../../constants';


const parseBlock = (block: IFullEthBlock, latestBlockNumber: string): IEthBlock => {
  return {
    hash: block?.hash,
    confirmations: Number(latestBlockNumber) - Number(block?.number) + 1,
    timestamp: block?.timestamp,
    height: block?.number,
    miner: block?.miner,
    transactionCount: block?.transactionCount,
    internalTransactionCount: block?.internalTransactionCount,
    difficulty: block?.difficulty,
    totalDifficulty: block?.totalDifficulty,
    size: `${block?.size} bytes`,
    nonce: block?.nonce,
    sha3Uncles: block?.sha3Uncles,
    uncles: block?.uncles?.length,
    gasLimit: block?.gasLimit,
    gasUsed: block?.gasUsed,
    blockReward: `${Number(block?.blockReward) / wei} ETH`,
    staticReward: `${Number(block?.staticReward) / wei} ETH`,
    totalFees: `${Number(block?.totalFees) / wei} ETH`,
    totalUncleReward: `${Number(block?.totalUncleReward) / wei} ETH`,
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

function* getSingleEthBlockWorker(action) {
  try {
    const blockHash = action?.data;

    const latestBlockNumber = yield call(getLatestBlockNumber, 'eth');

    const result = yield call(getEthBlockByHash, blockHash)

    const block = parseBlock(result?.header, latestBlockNumber);
    const rawTxs: IFullEthTransaction[] = result?.transactions;
    const transactions: IEthTransaction[] = rawTxs?.map(tx => parseTransaction(tx));

    return yield put(fetchSingleBlockSuccess({ block, transactions }));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchSingleBlockError());
  }
}

export default getSingleEthBlockWorker;
