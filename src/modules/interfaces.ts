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

export interface ITableBlock {
  hash: string;
  height: number;
  time: number;
  size: number;
}

export interface IColumn {
  Header: string;
  accessor: string;
}

export interface ITransaction {
  txid: string;
  size: 290;
  version: 2;
  locktime: 0;
  fee: 0;
  inputs: {
    coinbase: true;
    txid: string;
    output: 4294967295;
    sigscript: string;
    sequence: 4294967295;
    pkscript: null;
    value: null;
    address: null;
    witness: string[];
  }[];
  outputs: {
    address: string;
    pkscript: string;
    value: number;
    spent: boolean;
    spender: boolean;
  }[],
  block: {
    height: number;
    position: number;
  };
  deleted: boolean;
  time: number;
  rbf: boolean;
  weight: number;
}