import React, { FC } from 'react';
import { StyledPageNotFound } from './styles';


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
      <h1 className={'error-code'}>{errorCode}</h1>
      <span className={'error-message'}>{errorMessage}</span>
    </StyledPageNotFound>
  );
};

ErrorPage.defaultProps = {
  errorCode: '404',
  errorMessage: 'Page not found'
};

export default ErrorPage;
