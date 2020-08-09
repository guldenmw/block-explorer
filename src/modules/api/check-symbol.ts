import { TSymbol } from '../interfaces';

/**
 * API wrapper that determines the current currency symbol based on the block hash.
 * The method isn't ideal but it does the job.
 * If the block hash starts with '0x' it's ETH. If it doesn't do a HEAD
 * request with the hash to a BTC endpoint. If it returns 200, it's BTC, if not, it's BCH.
 */
const checkSymbol = async (blockHash: string): Promise<TSymbol> => {
  if (blockHash.startsWith('0x')) {
    return 'eth';
  } else {
    const url = `https://api.blockchain.info/haskoin-store/btc/block/${blockHash}?notx=true`
    const response = await fetch(url, { method: 'HEAD' });
    if (response?.status === 200) {
      return 'btc';
    }
    return 'bch';
  }
};

export default checkSymbol;
