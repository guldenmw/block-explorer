import { fetchLatestBlocksStart } from '../../modules/actions';
import { IApplicationState } from '../../modules/reducer';
import { TSymbol } from '../../modules/interfaces';
import { selectSymbol } from '../../modules/actions';

export const mapStateToProps = (state: IApplicationState) => {
  const symbol: TSymbol = state?.currentSymbol;
  const isLoading: boolean = state?.isLoading;
  const hasError: boolean = state?.hasError;

  const blocks = state?.blocks;

  return {
    symbol,
    blocks,
    isLoading,
    hasError,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchLatestBlocks(data) {
    dispatch(fetchLatestBlocksStart(data));
  },
  selectSymbol(data: TSymbol) {
    dispatch(selectSymbol(data));
  },
});
