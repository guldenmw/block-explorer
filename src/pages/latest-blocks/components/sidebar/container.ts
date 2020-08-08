import { IApplicationState } from '../../../../modules/reducer';
import { selectSymbol } from '../../../../modules/actions';
import { TSymbols } from '../../../../modules/interfaces';

export const mapStateToProps = (state: IApplicationState) => {
  const symbol = state?.currentSymbol;

  return {
    symbol,
  };
};

export const mapDispatchToProps = dispatch => ({
  selectSymbol(data: TSymbols) {
    console.log('data: ', data);
    dispatch(selectSymbol(data));
  },
});
