import { handleResponse } from './helpers';
import { IBlock, TSymbol } from '../interfaces';

/**
 * API wrapper that fetches a single block with the provided hash
 */
const getBlockByHash = async (symbol: TSymbol, blockHash: string): Promise<IBlock[]> => {
  const smbl = symbol === 'btc' ? 'bitcoin' : 'bitcoin-cash';
  let url = `https://api.blockchair.com/${smbl}/dashboards/block/${blockHash}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getBlockByHash;
