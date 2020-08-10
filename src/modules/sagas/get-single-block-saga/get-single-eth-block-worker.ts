import { call, put } from 'redux-saga/effects';
import moment from 'moment';

import { wei } from '../../constants';
import { IEthBlock, ITransaction, IFullEthBlock, IFullEthTransaction } from '../../interfaces';
import { fetchSingleBlockError, fetchSingleBlockSuccess } from '../../actions';
import { getLatestBlockNumber, getEthBlockByHash } from '../../api';


/**
 * Parse the provided block into the format needed for display.
 * Do any formatting of data as well.
 *
 * @param block - The block object to parse
 * @param latestBlockNumber - The latest block number to calculate confirmations
 */
const parseBlock = (block: IFullEthBlock, latestBlockNumber: string): IEthBlock => {
  return {
    hash: block?.hash,
    confirmations: Number(latestBlockNumber) - Number(block?.number) + 1,
    timestamp: moment.unix(Number(block?.timestamp)).format('YYYY-MM-DD HH:mm'),
    height: block?.number,
    miner: block?.miner,
    numberOfTransactions: block?.transactionCount,
    numberOfInternalTransactions: block?.internalTransactionCount,
    difficulty: parseFloat(block?.difficulty)?.toLocaleString('en'),
    totalDifficulty: parseFloat(block?.totalDifficulty)?.toLocaleString('en'),
    size: `${parseFloat(block?.size)?.toLocaleString('en')} bytes`,
    nonce: block?.nonce,
    sha3Uncles: block?.sha3Uncles,
    numberOfUncles: block?.uncles?.length,
    gasLimit: parseFloat(block?.gasLimit)?.toLocaleString('en'),
    gasUsed: parseFloat(block?.gasUsed)?.toLocaleString('en'),
    blockReward: `${Number(block?.blockReward) / wei} ETH`,
    staticReward: `${Number(block?.staticReward) / wei} ETH`,
    feeReward: `${Number(block?.totalFees) / wei} ETH`,
    totalUncleReward: `${Number(block?.totalUncleReward) / wei} ETH`,
  }
}

/**
 * Parse the provided transaction into the format needed for display.
 * Do any formatting of data as well.
 *
 * @param tx - The transaction object to format
 */
const parseTransaction = (tx: IFullEthTransaction): ITransaction => {
  const fee = Number(tx?.gasLimit) * Number(tx?.gasPrice)/wei;

  return {
    hash: tx?.blockHash,
    to: [
      {
        address: tx?.to,
        value: `${Number(tx?.value)/wei} ETH`,
      }
    ],
    from: tx?.from,
    time: moment.unix(Number(tx?.timestamp)).format('YYYY-MM-DD HH:mm'),
    fee: `${fee > 0 ? fee : '0.00000000'} ETH`,
    value: `${Number(tx?.value)/wei} ETH`,
  }
}

/**
 * Saga worker responsible for fetching the selected ETH block by it's bash
 * and formatting the data into the format needed for display
 */
function* getSingleEthBlockWorker(action) {
  try {
    const blockHash = action?.data;

    const latestBlockNumber = yield call(getLatestBlockNumber, 'eth');
    const result = yield call(getEthBlockByHash, blockHash)

    // Parse blocks into desired format
    const block = parseBlock(result?.header, latestBlockNumber);

    // Parse transactions into desired format
    const rawTxs: IFullEthTransaction[] = result?.transactions;
    const transactions: ITransaction[] = rawTxs?.slice(0, 5)?.map(tx => parseTransaction(tx));

    return yield put(fetchSingleBlockSuccess({ block, transactions }));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchSingleBlockError());
  }
}

export default getSingleEthBlockWorker;
