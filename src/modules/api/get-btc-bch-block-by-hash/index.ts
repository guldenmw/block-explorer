import { handleResponse } from '../helpers';
import { IBlock, TSymbol } from '../../interfaces';


/**
 * API wrapper that fetches a single block with the provided hash
 */
const index = async (
  symbol: TSymbol,
  blockHash: string,
  method: string = 'GET'
): Promise<IBlock[]> => {
  const smbl = symbol === 'btc' ? 'bitcoin' : 'bitcoin-cash';
  let url = `https://api.blockchair.com/${smbl}/dashboards/block/${blockHash}`;
  const response = await fetch(url, { method });
  handleResponse(response);
  return await response.json();
};

export default index;
