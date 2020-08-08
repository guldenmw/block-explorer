import { handleResponse } from './helpers';
import { apiBase } from './index';
import { IBlock, TSymbols } from '../interfaces';

/**
 * API wrapper used to fetch a specific block by it's hash
 */
const getBlockByHash = async (symbol: TSymbols, blockHash: string): Promise<IBlock> => {
  const url = `${apiBase}/${symbol}/block/${blockHash}?notx=false`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getBlockByHash;
