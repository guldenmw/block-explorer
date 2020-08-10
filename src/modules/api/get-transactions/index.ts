import { handleResponse } from '../helpers';
import { apiBase } from '../index';
import { ITransaction, TSymbol } from '../../interfaces';

/**
 * API wrapper that fetches the all the transactions of the ids provided.
 * @param symbol - string representing the blockchain to target
 * @param transactionIds - comma separated string list of transaction ids eg 12345,67890
 */
const index = async (symbol: TSymbol, transactionIds: string): Promise<ITransaction[]> => {
  const url = `${apiBase}/haskoin-store/${symbol}/transactions?txids=${transactionIds}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default index;
