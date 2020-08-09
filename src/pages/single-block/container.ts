import { IApplicationState } from '../../modules/reducer';
import { fetchSingleBlockStart, selectSymbol } from '../../modules/actions';
import { TSymbol } from '../../modules/interfaces';

export const mapStateToProps = (state: IApplicationState) => {
  const symbol: TSymbol = state?.currentSymbol;
  const currentBlock = state?.currentBlock;

  return {
    symbol,
    currentBlock,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchBlock(data) {
    dispatch(fetchSingleBlockStart(data));
  },
  selectSymbol(data) {
    dispatch(selectSymbol(data));
  },
});
