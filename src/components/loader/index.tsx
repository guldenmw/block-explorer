import React, { FC } from 'react';
import { StyledLoader } from './styles';


/**
 * Loader component responsible for displaying animated loader
 */
const Loader: FC = () => {
  return (
    <StyledLoader>
      <div className={'loader'}/>
    </StyledLoader>
  );
};

Loader.defaultProps = {};

export default Loader;
