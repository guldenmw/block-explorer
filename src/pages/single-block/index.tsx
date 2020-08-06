import React, { FC } from 'react';
import { useParams } from 'react-router';

interface IProps {
  [x: string]: any;
}

const SingleBlock: FC<IProps> = (props) => {
  const {  } = props;
  const { hash } = useParams();

  return (
    <div>
      {hash}
    </div>
  );
};

SingleBlock.defaultProps = {};

export default SingleBlock;
