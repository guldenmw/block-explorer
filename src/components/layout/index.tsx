import React, { FC } from 'react';
import { StyledWrapper } from './styles';

interface IProps {
  margin?: number;
}

const Layout: FC<IProps> = (props) => {
  const { margin, children } = props;
  return (
    <StyledWrapper margin={margin}>
      {children}
    </StyledWrapper>
  );
};

Layout.defaultProps = {
  margin: 150,
};

export default Layout;
