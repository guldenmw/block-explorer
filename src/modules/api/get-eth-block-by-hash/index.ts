import { apiBase } from '../index';
import { handleResponse } from '../helpers';
import { IEthBlock } from '../../interfaces';


/**
 * API wrapper that fetches a single eth block with the provided hash
 */
const getEthBlockByHash = async (blockHash: string, method: string = 'GET'): Promise<IEthBlock[]> => {
  const url = `${apiBase}/v2/eth/data/block/hash/${blockHash}`;
  const response = await fetch(url, { method });
  handleResponse(response);
  return await response.json();
};

export default getEthBlockByHash;
