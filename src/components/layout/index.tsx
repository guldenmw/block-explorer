import React, { FC } from 'react';
import { StyledLayout } from './styles';


interface IProps {
  hideOverflow?: boolean;
}

/**
 * Layout component responsible for general layout of pages
 */
const Layout: FC<IProps> = (props) => {
  const { hideOverflow, children } = props;
  return (
    <StyledLayout hideOverflow={hideOverflow}>
      <header className={'layout-header'}>
        <a href={'/block-explorer/#/'}>
          <h2>Block Explorer</h2>
        </a>
      </header>
      <section className={'layout-body'}>
        {children}
      </section>
    </StyledLayout>
  );
};

Layout.defaultProps = {
  hideOverflow: true
};

export default Layout;
