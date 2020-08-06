import React, { FC } from 'react';
import { StyledLayout } from './styles';

interface IProps {
  margin?: number;
}

const Layout: FC<IProps> = (props) => {
  const { margin, children } = props;
  return (
    <StyledLayout margin={margin}>
      {children}
    </StyledLayout>
  );
};

Layout.defaultProps = {
  margin: 150,
};

export default Layout;
