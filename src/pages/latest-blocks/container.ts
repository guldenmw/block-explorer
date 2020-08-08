import { fetchLatestBlocksStart } from '../../modules/actions';
import { accessors } from '../../modules/constants';
import { IApplicationState } from '../../modules/reducer';
import { TSymbols } from '../../modules/interfaces';
import { selectSymbol } from '../../modules/actions';
import moment from 'moment';

export const mapStateToProps = (state: IApplicationState) => {
  const symbol: TSymbols = state?.currentSymbol;
  const isLoading: boolean = state?.isLoading;
  const hasError: boolean = state?.hasError;

  const cols = accessors?.[symbol] ? accessors?.[symbol] : accessors.default;
  const blocks = state?.blocks?.map(block => {
    return Object.entries(block)?.reduce((newBlock, [key, val]) => {
      if (cols.includes(key)) {
        if (key === 'time') {
          val = moment.unix(val).fromNow(true);
        }
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
    blocks,
    isLoading,
    hasError,
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
