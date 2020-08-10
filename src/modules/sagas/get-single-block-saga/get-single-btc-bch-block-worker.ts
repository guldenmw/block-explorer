import { call, put } from 'redux-saga/effects';
import { satoshi } from '../../constants';

import {
  IBlock,
  IFullTransaction,
  INewBlock,
  ITransaction,
  TSymbol
} from '../../interfaces';
import moment from 'moment';
import { fetchSingleBlockError, fetchSingleBlockSuccess } from '../../actions';
import {
  getLatestBlockNumber,
  getBtcBchBlockByHash,
  getTransactions,
} from '../../api';


/**
 * Parse the provided block into the format needed for display.
 * Do any formatting of data as well.
 *
 * @param block - The block object to parse
 * @param latestBlockNumber - The latest block number to calculate confirmations
 */
const parseBlock = (block: INewBlock, latestBlockNumber: number): IBlock => {
  return {
    hash: block?.hash,
    confirmations: latestBlockNumber - block?.id + 1,
    timestamp: block?.time,
    height: block?.id,
    miner: block?.guessed_miner,
    numberOfTransactions: block?.transaction_count,
    difficulty: (block?.difficulty).toLocaleString('en'),
    merkleRoot: block?.merkle_root,
    version: block?.version_hex,
    bits: (block?.bits).toLocaleString('en'),
    weight: `${(block?.weight).toLocaleString('en')} WU`,
    size: `${(block?.size).toLocaleString('en')} bytes`,
    nonce: (block?.nonce).toLocaleString('en'),
    transactionVolume: `${block?.input_total/satoshi} BTC`,
    blockReward: `${block?.generation/satoshi} BTC`,
    feeReward: `${block?.fee_total/satoshi} BTC`,
  }
}

/**
 * Parse the provided transaction into the format needed for display.
 * Do any formatting of data as well.
 *
 * @param symbol - The symbol of the blockchain the block belongs to
 * @param tx - The transaction object to format
 */
const parseTransaction = (symbol: TSymbol, tx: IFullTransaction): ITransaction => {
  const to = tx?.outputs?.map(({ address, value, spent }) => ({
      address: address?.replace('bitcoincash:', ''),
      spent,
      value: `${value/satoshi} ${symbol.toUpperCase()}`
  }
  ));

  const fee = tx?.fee/satoshi;
  const valueRaw = tx?.outputs?.reduce((acc, output) => acc + output?.value, 0);
  const value = valueRaw/satoshi;
  const totalValue = value - fee;

  return {
    coinbase: tx?.inputs?.[0]?.coinbase,
    hash: tx?.txid,
    to,
    from: tx?.inputs?.[0]?.address,
    time: moment.unix(Number(tx?.time)).format('YYYY-MM-DD HH:mm'),
    fee: `${fee > 0 ? fee : '0.00000000'} ${symbol.toUpperCase()}`,
    value: `${value} ${symbol.toUpperCase()}`,
    totalValue: `${totalValue} ${symbol.toUpperCase()}`,
  }
}

/**
 * Saga worker responsible for fetching the selected BTC or BCH block by it's bash
 * and formatting the data into the format needed for display
 */
function* getSingleBtcBchBlockWorker(action, symbol: TSymbol) {
  try {
    const blockHash = action?.data;

    const latestBlockNumber = yield call(getLatestBlockNumber, symbol);
    const result = yield call(getBtcBchBlockByHash, symbol, blockHash)
    const blockDetails = result?.data?.[blockHash];

    const block = parseBlock(blockDetails?.block, latestBlockNumber);
    const txIds: string = blockDetails?.transactions?.slice(0, 5).join(',');
    const rawTransactions: IFullTransaction[] = yield call(getTransactions, symbol, txIds);

    const transactions: ITransaction[] = rawTransactions?.map(tx => parseTransaction(symbol, tx));

    return yield put(fetchSingleBlockSuccess({ block, transactions }));
  } catch (ex) {
    console.error(ex);
    return yield put(fetchSingleBlockError());
  }
}

export default getSingleBtcBchBlockWorker;
