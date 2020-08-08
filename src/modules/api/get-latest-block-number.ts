import { handleResponse } from './helpers';
import { apiBase } from './index';
import { ILatestBlock, TSymbols } from '../interfaces';

/**
 * API wrapper used to fetch the latest block on
 * the provided symbols blockchain
 */
const getLatestBlockNumber = async (symbol: TSymbols): Promise<ILatestBlock> => {
  let url = `${apiBase}/haskoin-store/${symbol}/block/best?notx=true`;
  if (symbol === 'eth') {
    url = `${apiBase}/v2/eth/data/block/latest/number`
  }
  const response = await fetch(url);
  handleResponse(response);
  const responseJson = await response.json();
  return symbol === 'eth' ? responseJson?.number : responseJson?.height;
};

export default getLatestBlockNumber;
