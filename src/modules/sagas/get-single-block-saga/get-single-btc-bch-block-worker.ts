import { call, put } from 'redux-saga/effects';
import { fetchSingleBlockError, fetchSingleBlockSuccess } from '../../actions';
import {
  IBlock,
  IFullTransaction,
  INewBlock,
  ITransaction,
  TSymbol
} from '../../interfaces';
import moment from 'moment';
import getLatestBlockNumber from '../../api/get-latest-block-number';
import getBlockByHash from '../../api/get-block-by-hash';
import { satoshi } from '../../constants';
import getTransactions from '../../api/get-transactions';


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

function* getSingleBtcBchBlockWorker(action, symbol: TSymbol) {
  try {
    const blockHash = action?.data;

    const latestBlockNumber = yield call(getLatestBlockNumber, symbol);
    const result = yield call(getBlockByHash, symbol, blockHash)
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
