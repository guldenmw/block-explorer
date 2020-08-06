export type TSymbols = 'btc' | 'eth' | 'bch';

export interface ILatestBlock {
  hash: string;
  time: number;
  block_index: number;
  height: number;
  txIndexes: string[];
}

export interface IBlock {
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
