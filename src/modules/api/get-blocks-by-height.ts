import { handleResponse } from './helpers';
import { apiBase } from './index';
import { IBlock, TSymbols } from '../interfaces';

/**
 * API wrapper that fetches the all the blocks of the height values provided.
 * @param symbol - string representing the blockchain to target
 * @param heights - comma separated string list of height values eg 642463,642462
 */
const getBlocksByHeights = async (symbol: TSymbols, heights: string): Promise<IBlock[]> => {
  const url = `${apiBase}/${symbol}/block/heights?heights=${heights}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getBlocksByHeights;
