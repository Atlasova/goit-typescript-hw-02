import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.errorMessage}>
      Oops! Something went wrong, please try again.
    </p>
  );
};

export default ErrorMessage;
