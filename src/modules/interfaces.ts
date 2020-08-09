export type TSymbol = 'btc' | 'eth' | 'bch';

export interface ILatestBlock {
  hash: string;
  time: number;
  block_index: number;
  height: number;
  txIndexes: string[];
}

export interface IInitialBlock {
  hash: string;
  height: number;
  mainchain: boolean;
  previous: string;
  time: number;
  version: number;
  bits: number;
  nonce: number;
  size: number;
  tx: string[];
  merkle: string;
  subsidy: number;
  fees: number;
  outputs: number;
  work: number;
  weight: number;
}

export interface IFullBlock extends IInitialBlock{
  transactions: ITransaction[];
  miner: string;
}

export interface IBlock {
  hash: string;
  confirmations: number;
  timestamp: string;
  height: number;
  miner: string;
  numberOfTransactions: number;
  difficulty: number;
  merkleRoot: string;
  version: string;
  bits: number;
  weight: string;
  size: string;
  nonce: number;
  transactionVolume: string;
  blockReward: string
  feeReward: string;
}

export interface ITableBlock {
  hash: string;
  height: number;
  time: number;
  size: number;

}

export interface IFullTransaction {
  txid: string;
  size: number;
  version: number;
  locktime: number;
  fee: number;
  inputs: Array<{
    coinbase: boolean;
    txid: string;
    output: number;
    sigscript: string;
    sequence: number;
    pkscript: number;
    value: number;
    address: string;
    witness: string[];
  }>;
  outputs: Array<{
    address: string;
    pkscript: string;
    value: number;
    spent: boolean;
    spender: boolean;
  }>;
  block: {
    height: number;
    position: number;
  };
  deleted: boolean;
  time: number;
  rbf: boolean;
  weight: number;
}

export interface IFullEthBlock {
  hash: string;
  timestamp: string;
  number: string;
  miner: string;
  transactionCount: number;
  internalTransactionCount: number;
  difficulty: string;
  totalDifficulty: string;
  size: string;
  nonce: string;
  sha3Uncles: string;
  gasLimit: string;
  gasUsed: string;
  staticReward: string;
  blockReward: string;
  totalFees: string;
  totalUncleReward: string;
  uncles: string[];
  parentHash: string;
  transactionsRoot: string;
  stateRoot: string;
  logsBloom: string;
  extraData: string;
}

export interface IEthBlock {
  hash: string;
  confirmations: number;
  timestamp: string;
  height: string;
  miner: string;
  numberOfTransactions: number;
  numberOfInternalTransactions: number;
  difficulty: string;
  totalDifficulty: string;
  size: string;
  nonce: string;
  sha3Uncles: string;
  numberOfUncles: number;
  gasLimit: string;
  gasUsed: string;
  blockReward: string;
  staticReward: string;
  feeReward: string;
  totalUncleReward: string;
}

export interface IFullEthTransaction {
  hash: string;
  blockHash: string;
  blockNumber: string;
  to: string;
  from: string;
  value: string;
  nonce: string;
  gasPrice: string;
  gasLimit: string;
  gasUsed: string;
  transactionIndex: string;
  success: number;
  state: string;
  timestamp: string;
  internalTransactions?: []
}

export interface ITransaction {
  coinbase?: boolean;
  hash: string;
  to: Array<{
    address: string;
    value: string;
  }>;
  from: string;
  time: string;
  fee: string;
  value: string;
  totalValue?: string;
}

export interface INewBlock {
  id: number;
  hash: string;
  date: string;
  time: string;
  median_time: string;
  size: number;
  stripped_size: number;
  weight: number;
  version: number;
  version_hex: string;
  version_bits: string;
  merkle_root: string;
  nonce: number;
  bits: number;
  difficulty: number;
  chainwork: string;
  coinbase_data_hex: string;
  transaction_count: number;
  witness_count: number;
  input_count: number;
  output_count: number;
  input_total: number;
  input_total_usd: number;
  output_total: number;
  output_total_usd: number;
  fee_total: number;
  fee_total_usd: number;
  fee_per_kb: number;
  fee_per_kb_usd: number;
  fee_per_kwu: number;
  fee_per_kwu_usd: number;
  cdd_total: number;
  generation: number;
  generation_usd: number;
  reward: number;
  reward_usd: number;
  guessed_miner: string;
}