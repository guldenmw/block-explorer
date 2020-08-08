import { handleResponse } from './helpers';
import { apiBase } from './index';
import { ITransaction, TSymbol } from '../interfaces';

/**
 * API wrapper that fetches a single transaction
 * @param symbol - string representing the blockchain to target
 * @param transactionId - id of the transaction to fetch
 */
const getTransaction = async (symbol: TSymbol, transactionId: string): Promise<ITransaction[]> => {
  const url = `${apiBase}/haskoin-store/${symbol}/transaction/${transactionId}`;
  const response = await fetch(url);
  handleResponse(response);
  return await response.json();
};

export default getTransaction;
