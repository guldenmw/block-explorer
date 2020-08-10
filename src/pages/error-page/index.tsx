import React, { FC } from 'react';
import { StyledPageNotFound } from './styles';
import SearchBar from '../../components/search-bar';


interface IProps {
  errorCode?: string;
  errorMessage?: string;
}

/**
 * Page responsible for displaying errors
 */
const ErrorPage: FC<IProps> = (props) => {
  const { errorCode, errorMessage } = props;
  return (
    <StyledPageNotFound>
      <SearchBar/>
      <div className={'error'}>
        <h1 className={'error-code'}>{errorCode}</h1>
        <span className={'error-message'}>{errorMessage}</span>
      </div>
    </StyledPageNotFound>
  );
};

ErrorPage.defaultProps = {
  errorCode: '404',
  errorMessage: 'Page not found'
};

export default ErrorPage;
