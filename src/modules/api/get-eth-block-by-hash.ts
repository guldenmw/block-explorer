import { handleResponse } from './helpers';
import { apiBase } from './index';
import { IEthBlock } from '../interfaces';

/**
 * API wrapper that fetches a single eth block with the provided hash
 */
const getEthBlockByHash = async (blockHash: string): Promise<IEthBlock[]> => {
  const url = `${apiBase}/v2/eth/data/block/hash/${blockHash}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getEthBlockByHash;
