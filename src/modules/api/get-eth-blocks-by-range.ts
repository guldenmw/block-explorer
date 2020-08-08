import { handleResponse } from './helpers';
import { apiBase } from './index';
import { IBlock, TSymbols } from '../interfaces';

/**
 * API wrapper that fetches the latest Ethereum blocks according to the range provided
 * @param from - the block number to start at
 * @param size - number of blocks to return
 */
const getEthBlocksByRange = async (from: number, size: number): Promise<IBlock[]> => {
  const url = `${apiBase}/v2/eth/data/blocks?size=${size}&from=${from}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getEthBlocksByRange;
