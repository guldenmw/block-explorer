import { fetchLatestBlocksStart } from '../../modules/actions';
import { accessors } from '../../modules/constants';
import { IApplicationState } from '../../modules/reducer';
import { TSymbols } from '../../modules/interfaces';
import { selectSymbol } from '../../modules/actions';

export const mapStateToProps = (state: IApplicationState) => {
  const symbol: TSymbols = state?.currentSymbol;
  const blocks = state?.blocks?.map(block => {
    return Object.entries(block)?.reduce((newBlock, [key, val]) => {
      if (accessors.includes(key)) {
        return {
          ...newBlock,
          [key]: val,
        }
      }
      return newBlock;
    }, {});
  })


  return {
    symbol,
    blocks
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchLatestBlocks(data) {
    dispatch(fetchLatestBlocksStart(data));
  },
  selectSymbol(data: TSymbols) {
    dispatch(selectSymbol(data));
  },
});
