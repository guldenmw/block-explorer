import { apiBase } from '../index';
import { handleResponse } from '../helpers';
import { IBlock } from '../../interfaces';

/**
 * API wrapper that fetches the latest Ethereum blocks according to the size provided
 * @param size - number of blocks to return
 */
const getLatestEthBlocks = async (size: number): Promise<IBlock[]> => {
  const url = `${apiBase}/v2/eth/data/blocks?size=${size}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getLatestEthBlocks;
