import { handleResponse } from './helpers';
import { apiBase } from './index';
import { ILatestBlock, TSymbols } from '../interfaces';

/**
 * API wrapper used to fetch the latest block on
 * the provided symbols blockchain
 */
const getLatestBlock = async (symbol: TSymbols): Promise<ILatestBlock> => {
  const url = `${apiBase}/${symbol}/block/best?notx=true`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getLatestBlock;
