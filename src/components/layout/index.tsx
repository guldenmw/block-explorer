import React, { FC } from 'react';
import { StyledLayout } from './styles';

interface IProps {
  padding?: number;
}

const Layout: FC<IProps> = (props) => {
  const { padding, children } = props;
  return (
    <StyledLayout padding={padding}>
      {children}
    </StyledLayout>
  );
};

Layout.defaultProps = {
  padding: 180,
};

export default Layout;
