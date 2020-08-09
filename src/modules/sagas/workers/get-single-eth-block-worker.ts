import { call, put } from 'redux-saga/effects';
import getEthBlockByHash from '../../api/get-eth-block-by-hash';
import { fetchSingleBlockError, fetchSingleBlockSuccess } from '../../actions';
import { IEthBlock, ITransaction, IFullEthBlock, IFullEthTransaction } from '../../interfaces';
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

const parseTransaction = (tx: IFullEthTransaction): ITransaction => {
  return {
    hash: tx?.blockHash,
    to: [
      {
        address: tx?.to,
        value: tx?.value,
      }
    ],
    from: tx?.from,
    time: moment.unix(Number(tx?.timestamp)).toISOString(),
    fee: `${Number(tx?.gasLimit) * Number(tx?.gasPrice)} ETH`,
    value: `${Number(tx?.value)/wei} ETH`,
  }
}

function* getSingleEthBlockWorker(action) {
  try {
    const blockHash = action?.data;

    const latestBlockNumber = yield call(getLatestBlockNumber, 'eth');

    const result = yield call(getEthBlockByHash, blockHash)

    const block = parseBlock(result?.header, latestBlockNumber);
    const rawTxs: IFullEthTransaction[] = result?.transactions;
    const transactions: ITransaction[] = rawTxs?.slice(0, 5)?.map(tx => parseTransaction(tx));

    return yield put(fetchSingleBlockSuccess({ block, transactions }));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchSingleBlockError());
  }
}

export default getSingleEthBlockWorker;
