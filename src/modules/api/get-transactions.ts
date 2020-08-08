import { handleResponse } from './helpers';
import { apiBase } from './index';
import { ITransaction, TSymbols } from '../interfaces';

/**
 * API wrapper that fetches the all the transactions of the ids provided.
 * @param symbol - string representing the blockchain to target
 * @param transactionIds - comma separated string list of transaction ids eg 12345,67890
 */
const getTransactions = async (symbol: TSymbols, transactionIds: string): Promise<ITransaction[]> => {
  const url = `${apiBase}/${symbol}/transactions?txids=${transactionIds}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getTransactions;
