import React, { FC } from 'react';
import { StyledLayout } from './styles';

const Layout: FC = (props) => {
  const { children } = props;
  return (
    <StyledLayout>
      <header className={'layout-header'}/>
      <section className={'layout-body'}>
        {children}
      </section>
    </StyledLayout>
  );
};

Layout.defaultProps = {};

export default Layout;
