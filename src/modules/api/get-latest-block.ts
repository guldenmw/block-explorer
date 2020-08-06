import { handleResponse } from './helpers';
import { apiBase } from './index';
import { ILatestBlock } from '../interfaces';

/**
 * API wrapper used to fetch the latest block on
 * the provided symbols blockchain
 */
const getLatestBlock = async (): Promise<ILatestBlock> => {
  const url = `${apiBase}/latestblock`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getLatestBlock;
