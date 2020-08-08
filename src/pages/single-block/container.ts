import { IApplicationState } from '../../modules/reducer';
import { fetchLatestBlocksStart } from '../../modules/actions';
import { TSymbols } from '../../modules/interfaces';

export const mapStateToProps = (state: IApplicationState, ownProps) => {
  const symbol: TSymbols = state?.currentSymbol;
  const currentBlock = state?.blocks?.find(block => block?.hash === ownProps?.blockHash);

  return {
    symbol,
    currentBlock,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchLatestBlocks(data) {
    dispatch(fetchLatestBlocksStart(data));
  },
});
