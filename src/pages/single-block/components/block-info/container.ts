import { IApplicationState } from '../../../../modules/reducer';

export const mapStateToProps = (state: IApplicationState) => {
  const currentBlock = state?.currentBlock;

  return {
    currentBlock
  };
};
