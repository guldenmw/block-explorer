import { handleResponse } from '../helpers';
import { IBlock, TSymbol } from '../../interfaces';


/**
 * API wrapper that fetches the latest BTC or BCH blocks
 */
const getLatestBtcBchBlocks = async (
  symbol: TSymbol,
  method: string = 'GET'
): Promise<IBlock[]> => {
  const smbl = symbol === 'btc' ? 'bitcoin' : 'bitcoin-cash';
  let url = `https://api.blockchair.com/${smbl}/blocks?limit=20`;
  const response = await fetch(url, { method });
  handleResponse(response);
  return await response.json();
};

export default getLatestBtcBchBlocks;
