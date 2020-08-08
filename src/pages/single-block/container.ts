import { IApplicationState } from '../../modules/reducer';
import { fetchTransactionsStart } from '../../modules/actions';

export const mapStateToProps = (state: IApplicationState) => {
  const currentBlock = state?.currentBlock;
  const transactions = state?.transactions;

  return {
    currentBlock,
    transactions
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchTransactions(blockHash: string) {
    dispatch(fetchTransactionsStart(blockHash));
  }
});
