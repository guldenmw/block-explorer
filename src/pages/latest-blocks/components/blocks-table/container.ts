import { fetchLatestBlocksStart } from '../../../../modules/actions';
import { accessors } from '../../../../modules/constants';
import { IApplicationState } from '../../../../modules/reducer';

export const mapStateToProps = (state: IApplicationState) => {
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
    blocks
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchLatestBlocks(data) {
    dispatch(fetchLatestBlocksStart(data));
  },
});
