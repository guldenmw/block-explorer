import React, { FC } from 'react';
import { StyledLoader } from './styles';


interface IProps {
  [x: string]: any;
}

/**
 * Loader component responsible for displaying animated loader
 */
const Loader: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <StyledLoader>
      <div className={'loader'}/>
    </StyledLoader>
  );
};

Loader.defaultProps = {};

export default Loader;
